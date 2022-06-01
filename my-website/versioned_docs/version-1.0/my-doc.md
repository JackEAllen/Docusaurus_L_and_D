---
id: my-doc-id
title: My document title
description: My document description
slug: /my-custom-url

tags:
  - Demo
  - Getting started
---

## Markdown heading

Markdown text with [links](./hello.md)

![Docusaurus logo](/img/docusaurus.png)

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
    return (
        <h1>Hello, Docusaurus!</h1>
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


<details>
<summary>Sprint</summary>
<h3>Sprint Processes</h3>
<div>
<ul>
    <li>
        <a class="dropdown_list" href="https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/Meeting-Roles-and-Rotas">Meeting Roles and Rotas</a>
    </li>
    <li>
        <a class="dropdown_list" href="https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/Estimating-Sprint-Capacity">Estimating Sprint Capacity</a>
    </li>
    <li>
        <a class="dropdown_list" href="https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/Sprint-Burn-down-Chart">Sprint Burn down Chart</a>
    </li>
    <li>Meetings</li>
    <ul>
        <li>
            <a class="dropdown_list" href="https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/Backlog-Preparation">Backlog Preparation/Pre-Planning</a>
        </li>
        <li>
            <a class="dropdown_list" href="https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/Sprint-Review">Sprint Planning</a>
        </li>
        <li>
            <a class="dropdown_list" href="https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/Sprint-Retrospective">Sprint Retrospective</a>
        </li>
    </ul>
</ul>

</div>
</details>

<details>
<summary>Special Days</summary>
<h3>Processes</h3>
<div>
<ul>
    <li>
        <a class="dropdown_list" href="https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/Friday-Quality-Time">Friday Quality Time</a>
    </li>
    <li>
        <a class="dropdown_list" href="https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/Technical-Debt-Stand-down">Technical Debt Stand-down</a>
    </li>
</ul>
</div>
</details>