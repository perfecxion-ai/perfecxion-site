# Incident Response Playbook

## Overview

This playbook defines procedures for responding to production incidents for perfecXion.ai. All team members should be familiar with these procedures.

## Incident Classification

### Severity Levels

| Severity | Description | Response Time | Examples |
|----------|-------------|---------------|----------|
| **SEV-1** | Complete service outage or critical security breach | Immediate (< 5 min) | Site down, data breach, total API failure |
| **SEV-2** | Major functionality impaired | 15 minutes | Payment processing down, login failures, major feature broken |
| **SEV-3** | Minor functionality impaired | 1 hour | Non-critical feature issues, performance degradation |
| **SEV-4** | Low impact issues | Next business day | UI bugs, minor errors, documentation issues |

## Incident Response Process

### 1. Detection & Alert

**Automated Detection Sources:**
- Uptime monitoring (Pingdom, UptimeRobot)
- Application Performance Monitoring (DataDog, New Relic)
- Error tracking (Sentry, Rollbar)
- Security monitoring (CloudFlare, AWS GuardDuty)
- Customer reports (Support tickets, Social media)

**Alert Channels:**
- PagerDuty for SEV-1 and SEV-2
- Slack #incidents channel for all severities
- Email for SEV-3 and SEV-4

### 2. Initial Response

#### Incident Commander Checklist
1. **Acknowledge the incident** (within SLA)
2. **Assess severity** and update if needed
3. **Create incident channel** (#incident-YYYY-MM-DD-XXX)
4. **Assign roles:**
   - Incident Commander (IC)
   - Technical Lead
   - Communications Lead
   - Scribe

#### First 15 Minutes
```bash
# 1. Verify the issue
curl -I https://perfecxion.ai
curl https://perfecxion.ai/api/health

# 2. Check recent deployments
vercel ls --limit 5

# 3. Review error rates
# Check monitoring dashboards

# 4. Isolate the impact
# - Affected services
# - Number of users impacted
# - Geographic regions affected
```

### 3. Investigation

#### Data Collection
```bash
# Collect logs
vercel logs --since 1h > incident-logs.txt

# Check metrics
curl https://perfecxion.ai/api/metrics

# Database status (if applicable)
psql -h db.perfecxion.ai -c "SELECT NOW();"

# CDN status
curl -I https://perfecxion.ai -H "Pragma: no-cache"
```

#### Common Investigation Paths

**Performance Issues:**
```bash
# 1. Check response times
for i in {1..10}; do 
  curl -w "@curl-format.txt" -o /dev/null -s https://perfecxion.ai
  sleep 1
done

# 2. Review resource usage
# Check monitoring dashboards for CPU, Memory, Network

# 3. Analyze slow queries (if database-related)
# Review database logs
```

**Error Spike:**
```bash
# 1. Identify error patterns
vercel logs --since 1h | grep -E "5[0-9]{2}" | head -20

# 2. Check recent code changes
git log --oneline -10

# 3. Review deployment history
vercel ls --limit 10
```

**Security Incident:**
```bash
# 1. Isolate the threat
# - Block suspicious IPs
# - Disable compromised accounts
# - Rotate credentials if needed

# 2. Preserve evidence
# - Capture logs
# - Document timeline
# - Screenshot dashboards

# 3. Assess impact
# - Data accessed
# - Systems compromised
# - Customer impact
```

### 4. Mitigation & Resolution

#### Quick Mitigation Options

**1. Feature Flags**
```javascript
// Disable problematic feature
await updateFeatureFlag('new-feature', false);
```

**2. Traffic Management**
```bash
# Implement rate limiting
vercel env add RATE_LIMIT_ENABLED true

# Block problematic IPs
# Update CloudFlare rules
```

**3. Rollback**
```bash
# Quick rollback to previous version
vercel rollback perfecxion-ai --yes
```

**4. Scaling**
```bash
# Scale up resources
vercel scale perfecxion-ai 5
```

#### Resolution Verification
1. **Confirm fix is deployed**
2. **Verify through monitoring**
3. **Run smoke tests**
4. **Check customer impact**

### 5. Communication

#### Internal Communication

**Incident Channel Updates (every 30 minutes):**
```
STATUS UPDATE - [TIME]
- Current Status: [Investigating/Mitigating/Monitoring]
- Impact: [Description of impact]
- Actions Taken: [List of actions]
- Next Steps: [What's happening next]
- ETA: [Resolution estimate]
```

#### External Communication

**Status Page Updates:**

SEV-1 Template:
```
Investigating - We are currently investigating reports of [issue description]. 
Our team is actively working on identifying the root cause.
Posted at [TIME]
```

SEV-2 Template:
```
Identified - We have identified an issue with [affected service]. 
[Brief description of impact]. Our team is working on a resolution.
Posted at [TIME]
```

Resolution Template:
```
Resolved - The issue with [affected service] has been resolved. 
All systems are now operating normally. We apologize for any inconvenience.
Posted at [TIME]
```

### 6. Post-Incident

#### Immediate Actions (within 2 hours)
1. **Confirm stability** through monitoring
2. **Document timeline** in incident report
3. **Notify stakeholders** of resolution
4. **Archive incident channel**

#### Post-Incident Review (within 48 hours)

**PIR Document Template:**
```markdown
# Incident Post-Mortem: [INCIDENT-ID]

## Summary
- **Date/Time**: [When it occurred]
- **Duration**: [How long it lasted]
- **Severity**: [SEV-1/2/3/4]
- **Impact**: [Who/what was affected]

## Timeline
- [TIME]: Alert received
- [TIME]: IC assigned
- [TIME]: Root cause identified
- [TIME]: Mitigation deployed
- [TIME]: Incident resolved

## Root Cause
[Detailed explanation of what caused the incident]

## Resolution
[How the incident was resolved]

## Lessons Learned
- What went well
- What didn't go well
- Where we got lucky

## Action Items
1. [Owner] - [Action] - [Due Date]
2. [Owner] - [Action] - [Due Date]
```

## Specific Incident Playbooks

### Playbook: Complete Site Outage

1. **Immediate Actions**
   ```bash
   # Check if site is truly down
   curl -I https://perfecxion.ai
   
   # Check from multiple locations
   # Use Down Detector or similar
   ```

2. **Check Vercel Status**
   - Visit: https://vercel-status.com
   - Check recent deployments

3. **DNS Issues**
   ```bash
   # Verify DNS resolution
   nslookup perfecxion.ai
   dig perfecxion.ai
   
   # Check DNS propagation
   # Use whatsmydns.net
   ```

4. **Mitigation Options**
   - Rollback recent deployment
   - Update DNS if needed
   - Contact Vercel support
   - Enable maintenance page

### Playbook: Database Connection Issues

1. **Verify Database Status**
   ```bash
   # Test connection
   psql -h db.perfecxion.ai -U dbuser -d perfecxion -c "SELECT 1;"
   
   # Check connection pool
   # Review application logs for connection errors
   ```

2. **Common Fixes**
   - Restart connection pool
   - Check connection limits
   - Verify credentials
   - Scale database if needed

### Playbook: High Error Rate

1. **Identify Error Pattern**
   ```bash
   # Get error summary
   vercel logs --since 1h | grep -E "ERROR|FATAL" | sort | uniq -c | sort -nr
   ```

2. **Common Causes**
   - Recent deployment
   - External service failure
   - Database issues
   - Resource exhaustion

3. **Quick Fixes**
   - Rollback deployment
   - Increase rate limits
   - Clear caches
   - Scale resources

### Playbook: Security Incident

1. **Immediate Isolation**
   - Block suspicious IPs
   - Disable affected features
   - Rotate credentials

2. **Evidence Collection**
   ```bash
   # Capture all logs
   vercel logs --since 24h > security-incident-logs.txt
   
   # Document all actions taken
   ```

3. **Notification Requirements**
   - Notify CTO immediately
   - Prepare customer communication
   - Consider legal obligations

## Tools & Resources

### Monitoring Dashboards
- **Vercel Dashboard**: https://vercel.com/dashboard
- **CloudFlare Analytics**: https://dash.cloudflare.com
- **Status Page**: https://status.perfecxion.ai

### Useful Commands
```bash
# Health check
curl https://perfecxion.ai/api/health | jq

# Performance check
curl -w "@curl-format.txt" -o /dev/null -s https://perfecxion.ai

# Recent errors
vercel logs --since 1h | grep ERROR

# Active connections
netstat -an | grep :443 | wc -l
```

### Emergency Contacts

**Escalation Path:**
1. On-call Engineer
2. Technical Lead
3. CTO
4. CEO (SEV-1 only)

**Vendor Support:**
- Vercel: support@vercel.com
- Database: [Provider support]
- CDN: [Provider support]

## Training & Drills

### Monthly Requirements
- Review playbook updates
- Practice incident scenarios
- Update contact information
- Test alerting systems

### Quarterly Drills
- Full SEV-1 simulation
- Rollback procedures
- Communication protocols
- Tool access verification

---

## Document Control
- **Version**: 1.0
- **Last Updated**: January 2025
- **Owner**: Operations Team
- **Next Review**: Monthly