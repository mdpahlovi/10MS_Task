export function cleanUpHtml(htmlString: string): string {
    if (!htmlString) return "";
    return htmlString.replace(/<p[^>]*>(&nbsp;|&amp;nbsp;|\s)*<\/p>/gi, "");
}
