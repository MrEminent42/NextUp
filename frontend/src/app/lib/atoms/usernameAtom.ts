import { atomWithStorage } from 'jotai/utils'

// establish a uniqie key for the cache
const cacheKey = 'username';

// create an atom with storage (will be persisted across refreshes)
export const usernameAtom = atomWithStorage<string | null>(cacheKey, null);