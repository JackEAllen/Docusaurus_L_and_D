---
id: upcoming
title: Upcoming Release Notes
description: Upcoming Release Notes
slug: /Upcoming_Release_Notes
---

## Upcoming Release Notes

Markdown text with [links](./hello.md)

![Docusaurus logo](/img/docusaurus.png)

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurusUpcoming() {
    return (
        <h1>Hello, new and improved Docusaurus!</h1>
    )
}
```

:::tip My tip

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::


export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
