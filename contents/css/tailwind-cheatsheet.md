# Tailwind CheatSheet

## Responsive design

Use the `max-w-` prefix to set the maximum width of an element.
There are fixed values based on the spacing scale, such as `max-w-0` (0px),
`max-w-px` (1px), `max-w-1` (0.25rem or 4px), up to `max-w-96` (24rem or 384px),
and beyond.

> Predefined container size classes available:

    max-w-xs (20rem or 320px)
    max-w-sm (24rem or 384px)
    max-w-md (28rem or 448px)
    max-w-lg (32rem or 512px)
    max-w-xl (36rem or 576px)
    max-w-2xl (42rem or 672px)
    max-w-3xl (48rem or 768px)
    max-w-4xl (56rem or 896px)
    max-w-5xl (64rem or 1024px)
    max-w-6xl (72rem or 1152px)
    max-w-7xl (80rem or 1280px)

Percentage-based maximum widths can be set using fractions like max-w-1/2 (50%) or max-w-3/4 (75%).

> Viewport-based values:

    max-w-screen-sm (640px)
    max-w-screen-md (768px)
    max-w-screen-lg (1024px)
    max-w-screen-xl (1280px)
    max-w-screen-2xl (1536px)

> Other utility classes:

    max-w-fit (sets the maximum width to fit-content)
    max-w-min (sets the maximum width to min-content)
    and max-w-max (sets the maximum width to max-content)
    max-w-none (removes any maximum width constraint)

> Custom values without extending the configuration file

Unique and arbitrary values can be used directly within square brackets,
such as `max-w-[50%]` for 50% of the parent's width or `max-w-[500px]` for 500 pixels.

## Breakpoints

| Breakpoint prefix | Minimum width  | CSS             |
| ----------------- | :------------: |  -------------- |
| sm                | 40rem (640px)  | @media (width >= 40rem) { ... } |
| md                | 48rem (768px)  | @media (width >= 48rem) { ... } |
| lg                | 64rem (1024px) | @media (width >= 64rem) { ... } |
| xl                | 80rem (1280px) | @media (width >= 80rem) { ... } |
| 2xl               | 96rem (1536px) | @media (width >= 96rem) { ... } |

<br>

> max-* variant for each breakpoint:

| Variant           | Media query    |
| ----------------- | :------------: |
| max-sm            | @media (width < 40rem) { ... } |
| max-md            | @media (width < 48rem) { ... } |
| max-lg            | @media (width < 64rem) { ... } |
| max-xl            | @media (width < 80rem) { ... } |
| max-2xl           | @media (width < 96rem) { ... } |

## Cursor styles

Cursor pointer class:

    `cursor-pointer`

Example:

    <div class="hover:cursor-pointer">Lorem ipsump</div>

## Fonts

### Font style

| Class      | Styles                |
| ---------- | --------------------- |
| italic     |  font-style: italic   |
| not-italic |  font-style: normal   |

### Font weight

    font-thin (100)
    font-extralight (200)
    font-light (300)
    font-normal (400)
    font-medium (500)
    font-semibold (600)
    font-bold (700)
    font-extrabold (800)
    font-black (900)

*also can use numeric font weights classes:

    font-100
    font-200
    font-300
    ...

### Font sizes

| Class        | Styles                                           |
| ------------ | ------------------------------------------------ |
| text-xs      | font-size: var(--text-xs); /* 0.75rem (12px) \*/  line-height: var(--text-xs--line-height); /* calc(1 / 0.75) \*/ |
| text-sm      | font-size: var(--text-sm); /* 0.875rem (14px) \*/ line-height: var(--text-sm--line-height); /* calc(1.25 / 0.875) \*/ |
| text-base    | font-size: var(--text-base); /* 1rem (16px) \*/   line-height: var(--text-base--line-height); /* calc(1.5 / 1) \*/ |
| text-lg      | font-size: var(--text-lg); /* 1.125rem (18px) \*/ line-height: var(--text-lg--line-height); /* calc(1.75 / 1.125) \*/ |
| text-xl      | font-size: var(--text-xl); /* 1.25rem (20px) \*/  line-height: var(--text-xl--line-height); /* calc(1.75 / 1.25) \*/ |
| text-2xl     | font-size: var(--text-2xl); /* 1.5rem (24px) \*/  line-height: var(--text-2xl--line-height); /* calc(2 / 1.5) \*/ |
| text-3xl     | font-size: var(--text-3xl); /* 1.875rem (30px) \*/ line-height: var(--text-3xl--line-height); /* calc(2.25 / 1.875) \*/ |
| text-4xl     | font-size: var(--text-4xl); /* 2.25rem (36px) \*/ line-height: var(--text-4xl--line-height); /* calc(2.5 / 2.25) \*/ |
| text-5xl     | font-size: var(--text-5xl); /* 3rem (48px) \*/ line-height: var(--text-5xl--line-height); /* 1 \*/ |
| text-6xl     | font-size: var(--text-6xl); /* 3.75rem (60px) \*/ line-height: var(--text-6xl--line-height); /* 1 \*/ |
| text-7xl     | font-size: var(--text-7xl); /* 4.5rem (72px) \*/ line-height: var(--text-7xl--line-height); /* 1 \*/ |
| text-8xl     | font-size: var(--text-8xl); /* 6rem (96px) \*/ line-height: var(--text-8xl--line-height); /* 1 \*/ |
| text-9xl     | font-size: var(--text-9xl); /* 8rem (128px) \*/ line-height: var(--text-9xl--line-height); /* 1 \*/ |
| text-(length:\<custom-property\>) | font-size: var(\<custom-property\>); |
| text-[\<value\>] | font-size: \<value\>; |

***

[Go to index](../../README.md)
