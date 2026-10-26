const responsiveImageWidths = [480, 768, 1080] as const;

export function getResponsiveWebpSrcSet(imagePath: string): string {
  return responsiveImageWidths
    .map((width) => `${imagePath}-${width}w.webp ${width}w`)
    .join(', ');
}
