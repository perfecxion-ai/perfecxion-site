# perfecXion.ai Launch Runbook

## Overview

This runbook provides step-by-step procedures for launching perfecXion.ai to production. Follow these procedures to ensure a smooth, coordinated launch.

## Table of Contents

1. [Pre-Launch Checklist](#pre-launch-checklist)
2. [Launch Day Timeline](#launch-day-timeline)
3. [Deployment Procedures](#deployment-procedures)
4. [Monitoring and Alerting](#monitoring-and-alerting)
5. [Issue Response Procedures](#issue-response-procedures)
6. [Rollback Procedures](#rollback-procedures)
7. [Post-Launch Procedures](#post-launch-procedures)
8. [Emergency Contacts](#emergency-contacts)

## Pre-Launch Checklist

### T-24 Hours

- [ ] **Final Testing Complete**
  - All integration tests passing (>95% success rate)
  - Performance benchmarks met (<3s page load)
  - Security scans show no critical issues
  - Accessibility compliance verified (WCAG 2.1 AA)

- [ ] **Infrastructure Ready**
  - Production servers provisioned and tested
  - SSL certificates valid and auto-renewal configured
  - DNS records configured and tested
  - CDN endpoints configured and cache rules set
  - Backup systems tested and verified

- [ ] **Content Approved**
  - All website content reviewed and approved
  - Legal documents (Privacy Policy, Terms) finalized
  - Marketing materials ready for launch
  - SEO optimization complete

- [ ] **Team Briefing**
  - All team members briefed on launch procedures
  - Support team trained and ready
  - Escalation procedures reviewed
  - Communication channels tested

### T-2 Hours

- [ ] **Final Deployment Preparation**
  - Code freeze in effect
  - Final build created and tested
  - Deployment scripts verified
  - Rollback plan confirmed

- [ ] **Monitoring Systems Active**
  - All monitoring dashboards accessible
  - Alert rules configured and tested
  - On-call rotations confirmed
  - Status page prepared

## Launch Day Timeline

### T-2 Hours: Pre-Launch
```bash
# 1. Deploy to production (blue-green deployment)
vercel --prod

# 2. Verify deployment
curl -I https://perfecxion.ai
# Expected: HTTP/2 200

# 3. Run smoke tests
npm run test:smoke:production

# 4. Warm CDN cache
npm run cache:warm
```

### T-0: GO LIVE!

1. **DNS Cutover**
   ```bash
   # Update DNS A records
   # perfecxion.ai -> 76.76.21.21 (Vercel)
   # www.perfecxion.ai -> CNAME -> cname.vercel-dns.com
   ```

2. **Verify DNS Propagation**
   ```bash
   # Check DNS propagation
   dig perfecxion.ai
   nslookup perfecxion.ai
   
   # Test from multiple locations
   curl -I https://perfecxion.ai
   ```

3. **Launch Communications**
   - [ ] Send internal announcement
   - [ ] Publish social media posts
   - [ ] Send press release
   - [ ] Update status page

### T+1 Hour: Initial Monitoring

1. **Performance Checks**
   ```bash
   # Check response times
   curl -w "@curl-format.txt" -o /dev/null -s https://perfecxion.ai
   
   # Monitor error rates
   tail -f /var/log/perfecxion/error.log
   ```

2. **Business Metrics**
   - Monitor visitor traffic
   - Track conversion rates
   - Review user feedback
   - Check support ticket volume

## Deployment Procedures

### Production Deployment Steps

1. **Pre-deployment Validation**
   ```bash
   # Run pre-deployment checks
   npm run deploy:validate
   
   # Verify environment variables
   vercel env pull
   ```

2. **Deploy to Production**
   ```bash
   # Deploy with Vercel CLI
   vercel --prod
   
   # Note deployment URL
   # Example: https://perfecxion-ai-git-main.vercel.app
   ```

3. **Post-deployment Validation**
   ```bash
   # Health check
   curl https://perfecxion.ai/api/health
   # Expected: {"status":"healthy","timestamp":"..."}
   
   # Run critical path tests
   npm run test:critical:production
   ```

### Blue-Green Deployment

1. **Deploy to Green Environment**
   ```bash
   # Deploy new version
   vercel --prod --alias perfecxion-green
   ```

2. **Test Green Environment**
   ```bash
   # Comprehensive testing
   npm run test:integration -- --env=green
   ```

3. **Switch Traffic**
   ```bash
   # Update production alias
   vercel alias perfecxion-green perfecxion.ai
   ```

## Monitoring and Alerting

### Critical Metrics to Monitor

1. **Uptime and Availability**
   - Target: 99.9% uptime
   - Alert threshold: 2 consecutive failures
   - Check interval: 30 seconds

2. **Performance Metrics**
   - Page Load Time: <3 seconds
   - API Response Time: <500ms
   - Core Web Vitals: All green

3. **Error Rates**
   - 4xx errors: <1%
   - 5xx errors: <0.1%
   - JavaScript errors: <0.5%

### Monitoring Commands

```bash
# Real-time log monitoring
tail -f /var/log/perfecxion/access.log | grep -E "5[0-9]{2}"

# Performance monitoring
watch -n 5 'curl -s -w "%{time_total}\n" -o /dev/null https://perfecxion.ai'

# Traffic monitoring
watch -n 10 'netstat -an | grep :443 | wc -l'
```

### Alert Response Matrix

| Alert Type | Response Time | Escalation | Actions |
|-----------|---------------|------------|---------|
| Site Down | Immediate | CEO, CTO, DevOps Lead | Execute rollback procedure |
| Performance Degradation | 15 minutes | DevOps Lead | Scale resources, investigate |
| High Error Rate | 30 minutes | Dev Lead | Review logs, deploy hotfix |
| Security Alert | Immediate | Security Lead, CTO | Isolate threat, patch |

## Issue Response Procedures

### Severity Levels

#### Severity 1: Critical (Site Down)
1. **Immediate Actions**
   - Acknowledge alert within 5 minutes
   - Begin investigation immediately
   - Update status page
   - Notify stakeholders

2. **Resolution Steps**
   ```bash
   # 1. Verify issue
   curl -I https://perfecxion.ai
   
   # 2. Check deployment status
   vercel ls
   
   # 3. If needed, rollback
   vercel rollback
   ```

#### Severity 2: Major (Feature Broken)
1. **Response within 15 minutes**
2. **Investigate root cause**
3. **Deploy hotfix or disable feature**
4. **Update status page if customer-facing**

#### Severity 3: Minor (Non-Critical Bug)
1. **Log issue in tracking system**
2. **Schedule fix for next deployment**
3. **Monitor for escalation**

### Common Issues and Solutions

#### Issue: High Response Times
```bash
# 1. Check server resources
vercel logs --since 1h

# 2. Review CDN performance
curl -I https://perfecxion.ai -H "Pragma: no-cache"

# 3. Scale if needed
vercel scale perfecxion-ai 3
```

#### Issue: Database Connection Errors
```bash
# 1. Check connection pool
# Review logs for connection errors

# 2. Verify database status
pg_isready -h db.perfecxion.ai

# 3. Restart connection pool if needed
```

## Rollback Procedures

### Immediate Rollback (< 5 minutes)
```bash
# 1. List recent deployments
vercel ls perfecxion-ai

# 2. Rollback to previous version
vercel rollback perfecxion-ai

# 3. Verify rollback
curl -I https://perfecxion.ai
```

### Full Rollback Procedure
1. **Initiate Rollback**
   ```bash
   # Set maintenance mode
   vercel env add MAINTENANCE_MODE true
   
   # Rollback deployment
   vercel rollback perfecxion-ai --yes
   ```

2. **Verify Rollback**
   ```bash
   # Check version
   curl https://perfecxion.ai/api/version
   
   # Run smoke tests
   npm run test:smoke:production
   ```

3. **Clear Caches**
   ```bash
   # Purge CDN cache
   vercel cache purge
   
   # Clear application caches
   curl -X POST https://perfecxion.ai/api/cache/clear
   ```

4. **Disable Maintenance Mode**
   ```bash
   vercel env rm MAINTENANCE_MODE
   ```

## Post-Launch Procedures

### T+1 Hour
- [ ] Review all monitoring dashboards
- [ ] Check error logs for anomalies
- [ ] Verify business metrics tracking
- [ ] Respond to urgent user feedback

### T+24 Hours
- [ ] Generate launch metrics report
- [ ] Review user feedback and issues
- [ ] Plan immediate optimizations
- [ ] Schedule team retrospective

### Week 1
- [ ] Analyze performance data
- [ ] Implement quick wins
- [ ] Plan A/B tests
- [ ] Review support tickets

## Emergency Contacts

### Primary Contacts
- **DevOps Lead**: John Doe
  - Phone: +1-555-0123
  - Email: john@perfecxion.ai
  - Slack: @john

- **CTO**: Jane Smith
  - Phone: +1-555-0124
  - Email: jane@perfecxion.ai
  - Slack: @jane

- **Security Lead**: Mike Johnson
  - Phone: +1-555-0125
  - Email: mike@perfecxion.ai
  - Slack: @mike

### Vendor Contacts
- **Vercel Support**
  - Email: support@vercel.com
  - Enterprise Support: +1-555-VERCEL

- **Database Provider**
  - 24/7 Support: +1-555-DATABASE
  - Email: support@database.com

- **CDN Provider**
  - NOC: +1-555-CDN-NOC
  - Email: noc@cdn.com

### Communication Channels
- **Internal**: #launch-war-room (Slack)
- **Status Page**: https://status.perfecxion.ai
- **Customer Support**: support@perfecxion.ai

## Appendices

### A. Useful Commands
```bash
# Check SSL certificate
openssl s_client -connect perfecxion.ai:443 -servername perfecxion.ai

# DNS lookup from specific nameserver
nslookup perfecxion.ai 8.8.8.8

# Test from different geographic locations
curl -I https://perfecxion.ai --resolve perfecxion.ai:443:76.76.21.21

# Monitor real-time traffic
watch -n 1 'curl -s https://perfecxion.ai/api/metrics | jq .'
```

### B. Configuration Files
- Production environment: `.env.production`
- Vercel configuration: `vercel.json`
- Monitoring config: `monitoring.config.js`

### C. Recovery Time Objectives
- **RTO**: 15 minutes (time to restore service)
- **RPO**: 1 hour (acceptable data loss)
- **MTTR**: 30 minutes (mean time to repair)

---

## Document Control
- **Version**: 1.0
- **Last Updated**: January 2025
- **Owner**: DevOps Team
- **Review Cycle**: Monthly