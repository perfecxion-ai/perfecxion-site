'use client'

import { useState } from 'react'
import { ChevronDown, X } from 'lucide-react'
import { ContentFilter as FilterType, ContentCategory, ContentTag } from '@/lib/content-types'

interface ContentFilterProps {
  filters: FilterType
  categories: ContentCategory[]
  tags: ContentTag[]
  onChange: (filters: Partial<FilterType>) => void
}

export default function ContentFilter({ filters, categories, tags, onChange }: ContentFilterProps) {
  const [expandedSections, setExpandedSections] = useState({
    type: true,
    category: true,
    difficulty: true,
    tags: false,
    sort: true
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleTypeChange = (type: FilterType['type']) => {
    onChange({ type })
  }

  const handleCategoryChange = (category: string) => {
    onChange({ category: filters.category === category ? undefined : category })
  }

  const handleDifficultyChange = (difficulty: FilterType['difficulty']) => {
    onChange({ difficulty: filters.difficulty === difficulty ? undefined : difficulty })
  }

  const handleTagToggle = (tagId: string) => {
    const currentTags = filters.tags || []
    const newTags = currentTags.includes(tagId)
      ? currentTags.filter(id => id !== tagId)
      : [...currentTags, tagId]
    
    onChange({ tags: newTags.length > 0 ? newTags : undefined })
  }

  const handleSortChange = (sortBy: FilterType['sortBy'], sortOrder?: FilterType['sortOrder']) => {
    onChange({ sortBy, sortOrder: sortOrder || filters.sortOrder })
  }

  const clearCategory = () => onChange({ category: undefined })
  const clearDifficulty = () => onChange({ difficulty: undefined })
  const clearTags = () => onChange({ tags: undefined })

  const FilterSection = ({ 
    title, 
    sectionKey, 
    children 
  }: { 
    title: string
    sectionKey: keyof typeof expandedSections
    children: React.ReactNode 
  }) => (
    <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full text-left py-2"
      >
        <span className="font-medium text-gray-900 dark:text-white">{title}</span>
        <ChevronDown 
          className={`h-4 w-4 transition-transform ${
            expandedSections[sectionKey] ? 'rotate-180' : ''
          }`} 
        />
      </button>
      {expandedSections[sectionKey] && (
        <div className="mt-2 space-y-2">
          {children}
        </div>
      )}
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Content Type */}
      <FilterSection title="Content Type" sectionKey="type">
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Content' },
            { value: 'learning', label: 'Learning Resources' },
            { value: 'blog', label: 'Blog Posts' },
            { value: 'whitepaper', label: 'White Papers' }
          ].map(option => (
            <label key={option.value} className="flex items-center">
              <input
                type="radio"
                name="contentType"
                value={option.value}
                checked={filters.type === option.value}
                onChange={(e) => handleTypeChange(e.target.value as FilterType['type'])}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Category */}
      <FilterSection title="Category" sectionKey="category">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {filters.category ? 'Selected:' : 'Choose a category'}
            </span>
            {filters.category && (
              <button
                onClick={clearCategory}
                className="text-xs text-primary-600 dark:text-primary-400 hover:text-primary-700"
              >
                Clear
              </button>
            )}
          </div>
          {categories.map(category => (
            <label key={category.id} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.category === category.id}
                onChange={() => handleCategoryChange(category.id)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300 flex-1">
                {category.name}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                ({category.contentCount})
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Difficulty */}
      <FilterSection title="Difficulty Level" sectionKey="difficulty">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {filters.difficulty ? 'Selected:' : 'Choose difficulty'}
            </span>
            {filters.difficulty && (
              <button
                onClick={clearDifficulty}
                className="text-xs text-primary-600 dark:text-primary-400 hover:text-primary-700"
              >
                Clear
              </button>
            )}
          </div>
          {[
            { value: 'beginner', label: 'Beginner', color: 'text-green-600 dark:text-green-400' },
            { value: 'intermediate', label: 'Intermediate', color: 'text-yellow-600 dark:text-yellow-400' },
            { value: 'advanced', label: 'Advanced', color: 'text-red-600 dark:text-red-400' }
          ].map(option => (
            <label key={option.value} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.difficulty === option.value}
                onChange={() => handleDifficultyChange(option.value as FilterType['difficulty'])}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
              />
              <span className={`ml-2 text-sm font-medium ${option.color}`}>
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Tags */}
      <FilterSection title="Tags" sectionKey="tags">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {(filters.tags?.length || 0) > 0 ? `${filters.tags?.length} selected` : 'Choose tags'}
            </span>
            {(filters.tags?.length || 0) > 0 && (
              <button
                onClick={clearTags}
                className="text-xs text-primary-600 dark:text-primary-400 hover:text-primary-700"
              >
                Clear all
              </button>
            )}
          </div>
          
          {/* Selected tags */}
          {(filters.tags?.length || 0) > 0 && (
            <div className="flex flex-wrap gap-1 mb-2">
              {filters.tags?.map(tagId => {
                const tag = tags.find(t => t.id === tagId)
                return tag ? (
                  <span
                    key={tagId}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary-100 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                  >
                    {tag.name}
                    <button
                      onClick={() => handleTagToggle(tagId)}
                      className="ml-1 hover:text-primary-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ) : null
              })}
            </div>
          )}
          
          {/* Available tags */}
          <div className="max-h-40 overflow-y-auto space-y-1">
            {tags
              .filter(tag => !filters.tags?.includes(tag.id))
              .sort((a, b) => b.usage - a.usage)
              .slice(0, 20)
              .map(tag => (
                <label key={tag.id} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.tags?.includes(tag.id) || false}
                    onChange={() => handleTagToggle(tag.id)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300 flex-1">
                    {tag.name}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    ({tag.usage})
                  </span>
                  {tag.trending && (
                    <span className="ml-1 text-xs text-orange-500">🔥</span>
                  )}
                </label>
              ))}
          </div>
        </div>
      </FilterSection>

      {/* Sort Options */}
      <FilterSection title="Sort By" sectionKey="sort">
        <div className="space-y-2">
          {[
            { value: 'date', label: 'Publication Date' },
            { value: 'title', label: 'Title' },
            { value: 'popularity', label: 'Popularity' },
            { value: 'difficulty', label: 'Difficulty' }
          ].map(option => (
            <label key={option.value} className="flex items-center">
              <input
                type="radio"
                name="sortBy"
                value={option.value}
                checked={filters.sortBy === option.value}
                onChange={(e) => handleSortChange(e.target.value as FilterType['sortBy'])}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                {option.label}
              </span>
            </label>
          ))}
          
          <div className="mt-3 flex items-center gap-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">Order:</span>
            <label className="flex items-center">
              <input
                type="radio"
                name="sortOrder"
                value="desc"
                checked={filters.sortOrder === 'desc'}
                onChange={(e) => handleSortChange(filters.sortBy, e.target.value as FilterType['sortOrder'])}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
              />
              <span className="ml-1 text-sm text-gray-700 dark:text-gray-300">
                Desc
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="sortOrder"
                value="asc"
                checked={filters.sortOrder === 'asc'}
                onChange={(e) => handleSortChange(filters.sortBy, e.target.value as FilterType['sortOrder'])}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
              />
              <span className="ml-1 text-sm text-gray-700 dark:text-gray-300">
                Asc
              </span>
            </label>
          </div>
        </div>
      </FilterSection>
    </div>
  )
}