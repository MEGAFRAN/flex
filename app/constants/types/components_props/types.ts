export type TextProps =
{
    text: string,
    alignment?: "initial" | "center"| "left" | "right" | "justify" | "inherit"
}

export type LinkProps =
{
    text?: string,
    href: string,
    target?: "_self" | "_blank",
    children?: any,
    isDownload?: boolean,
    isOpenNewWindow?: boolean,
    emailAddress?: string,
    rel?: "external" | "next" | "prev" | "nofollow",
    referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" |
    "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url",
}

export type CardProps =
{
    id?: string,
    tags?: [],
    title?: string,
    imageUrl?: string,
    description?: string,
    featured?: boolean
}    

export type TableProps =
{
    tableHeaders: [],
    tableRows: []
}  

export type ImageProps =
{
    src: string,
    height: string,
    width: string,
    loading: "eager" | "lazy"
} 

export type HeadingProps =
{
    title: string,
    headingType: 'h1' | 'h2' | 'h3' | 'h4'
} 