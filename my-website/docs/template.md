---
id: Template
sidebar_position: 4
title: Template
description: Template Page Developer Reference
slug: /Template

tags:
  - Getting started
  - DeveloperDocs
---
import styles from './styles.module.css';

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

# Developer Reference Template Page

Welcome to the developer markdown template page.

This page acts as a template for developer reference when modifying or creating new pages.

Please add to this page any new styling or content you want to add to the developer reference which you believe may be useful for other developers.

In addition to this template page, please read through [Docusaurus's Documentation](https://docusaurus.io/docs)

---

## Images

Below is an example of how to use an image in markdown. It's essentially exactly the same implementation as you would use in a normal markdown page, which hihglights one of the true benefits of Docusaurus! 

Docusuarus allows you to write documentation in a variety of different formats, including markdown, HTML and Javascript, and even MDX! MDX is markdown that is more powerful than pure markdown by incorporating other react components. All markdown raw or in the form of mdx is converted to tartic HTML and Javascript on deployment which you can see by using the your chgosen web browsers inspection tool.

Images are stored in `/img/<IMAGE_FILE>`

![Docusaurus logo](/img/docusaurus.png)

---

## Collapsable Sections

Similarly to regualr markdown, you can create collapsable sections of content. Below is an example of how to do this.
The tags are not realle HTML tags, but jsx tags.

```jsx
<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
    <details>
      <summary>
        Nested toggle! Some surprise inside...
      </summary>
      <div>
        🐐🐐🐐🐐🐐🐐
      </div>
    </details>
  </div>
</details>
```

<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
    <details>
      <summary>
        Nested toggle! Some surprise inside...
      </summary>
      <div>
        🐐🐐🐐🐐🐐🐐
      </div>
    </details>
  </div>
</details>

## Admonitions

Admonitions are useful snippets that can be used to help you with your documentation by providing you with a quick reference to common things you may need to be aware of as a user reading hte documentation such as INFO, WARNING, ERROR, etc.

```jsx
:::note Optional Title

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::
```

:::note Optional Title

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::tip Optional Title

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::info Optional Title

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::caution Optional Title

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::danger Optional Title

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::


### Admonitions with MDX
Using MDX, you can make admontation tabs. The tabs take advantage of mdx by relative import `./styles.module.css` which contains some custom css to change the colours of hte tabs to make them more distinguishable from one another.

```jsx
:::tip Use tabs in admonitions

<Tabs>
  <TabItem value="apple" label="Apple"attributes={{className: styles.red}}>This is an apple 🍎</TabItem>
  <TabItem value="orange" label="Orange"attributes={{className: styles.orange}}>This is an orange 🍊</TabItem>
  <TabItem value="banana" label="Banana"attributes={{className: styles.yellow}}>This is a banana 🍌</TabItem>
</Tabs>

:::
```

:::tip Use tabs in admonitions

<Tabs>
  <TabItem value="apple" label="Apple"attributes={{className: styles.red}}>This is an apple 🍎</TabItem>
  <TabItem value="orange" label="Orange"attributes={{className: styles.orange}}>This is an orange 🍊</TabItem>
  <TabItem value="banana" label="Banana"attributes={{className: styles.yellow}}>This is a banana 🍌</TabItem>
</Tabs>

:::

---

## MDX and React Components

MDX makes your documantation more interactive by allowing you to use React componenets inside of Markdown.

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

```jsx
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
```

This is <Highlight color="#0268aa">IBEX dark blue</Highlight>
 
This is <Highlight color="#00b2e2">IBEX light blue</Highlight>

This is <Highlight color="#002e87">STFC UKRI dark blue</Highlight>

This is <Highlight color="#1c5cf8">STFC UKRI light blue</Highlight>

---

## Static Code Examples for Multiple Languages

<Tabs>
<TabItem value="js" label="JavaScript">

```jsx title="src/components/HelloDocusaurus.js"
function helloWorld() {
  console.log('Hello, world!');
}
```

</TabItem>
<TabItem value="py" label="Python">

```py title="src/components/HelloDocusaurus.py"
def helloWorld():
    print('Hello, world!')

if __name__ == '__main__':
    helloWorld()
```

</TabItem>
<TabItem value="sql" label="SQL">

```sql
CREATE TABLE helloworld (phrase TEXT);
.tables
```
</TabItem>
</Tabs>

---

## Live Code Block

Below are live code blocks written in Python 
The below examples can be modified by the user as the live editor acts as a sandbox. if wishing to use live code blocks in Javascript, you will need to change the `docusaurus.config.js` file to use `themes: ['@docusaurus/theme-live-codeblock']` instead of `themes: ['docusaurus-live-brython']`. 

Live python is achieved using [Brython](https://github.com/lebalz/docusaurus-live-brython)


# Example of Turtle

```py live_py
from turtle import *
color('red', 'yellow')
begin_fill()
while True:
    forward(200)
    left(170)
    p = pos()
    if abs(p[0]) < 1 and abs(p[1]) < 1:
        break
end_fill()
setposition(0, 200)
write("IBEX is the Coolest!", font=("Arial", 20, "normal"), align="top")
done()
```
