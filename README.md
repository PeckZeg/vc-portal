# VcPortal

[`rc-util`][rc-util] 中关于 `Portal` 的 Vue 实现。

## Props

参数           | 说明                       | 类型                       | 默认值
-------------- | -------------------------- | -------------------------- | ----
`getContainer` | 获取承载的容器元素         | `Function() : HTMLElement` | -
`didUpdate`    | 每次更新后的执行的回调函数 | `Function()`               | -
`targetClass`  | 传送后的目标的样式         | `string\|object\|array`    | -

## Slots

插槽      | 说明
--------- | ----
`default` | 默认插槽，内容为传送后的目标


[rc-util]: https://github.com/react-component/util
