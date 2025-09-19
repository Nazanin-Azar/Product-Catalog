import { useState } from '#app'

export const useSearchQuery = () => useState<string>('searchQuery', () => '')
