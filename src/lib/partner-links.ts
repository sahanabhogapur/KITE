/** Returns the best outbound link for a partner (UTM > API > website). */
export function getPartnerLink(partner: {
  utm?: string
  api?: string
  website?: string
}): string | null {
  if (partner.utm?.trim()) return partner.utm.trim()
  if (partner.api?.trim()) return partner.api.trim()
  if (partner.website?.trim()) return partner.website.trim()
  return null
}

export function appendQueryParams(
  url: string,
  params: Record<string, string>
): string {
  try {
    const parsed = new URL(url)
    Object.entries(params).forEach(([key, value]) => {
      if (value) parsed.searchParams.set(key, value)
    })
    return parsed.toString()
  } catch {
    return url
  }
}
