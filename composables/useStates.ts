import { useState } from '#app'

export const useSearchQuery = () => useState<string>('searchQuery', () => '')

export const useUser = () => {
  return useState("user", () => ({
    name: "",
    loggedIn: false,
  }));
};

