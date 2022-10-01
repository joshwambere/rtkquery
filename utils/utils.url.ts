export const buildUrl = (url: string, params?: Record<string, string | number | boolean>) => {
    console.log("-------------------------***********", url)
    const urlObject = new URL(url);
    if (params)
    {
        Object.entries(params).forEach(([key, value]) => {
            urlObject.searchParams.append(key, String(value));
        });
    }

    return urlObject.toString();
}
