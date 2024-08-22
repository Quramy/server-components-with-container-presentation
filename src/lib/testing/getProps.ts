import type { ComponentProps, JSXElementConstructor } from 'react'

function isElement(prop: unknown): prop is JSX.Element {
  if (typeof prop !== 'object' || prop == undefined || !Object.hasOwn(prop, '$$typeof')) {
    return false
  }
  if (
    'type' in prop &&
    Object.hasOwn(prop, 'type') &&
    (typeof prop.type === 'function' || typeof prop.type === 'string' || typeof prop.type === 'symbol')
  ) {
    return true
  }
  return false
}

/**
 *
 * @example
 *
 * ```tsx
 * function Fuga() {
 *   return <div id="hoge"><Hoge className="fuga-hoge"/></div>
 * }
 *
 * const el = Fuga();
 * assert(getProps(el, "div")!.id === "hoge");
 * assert(getProps(el, Hoge)!.className === "fuga-hoge");
 * ```
 *
 **/
export function getProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>>(
  element: JSX.Element,
  componentType: Function | string,
): ComponentProps<T> | undefined {
  if (element.type === componentType) {
    return element.props
  }
  const foundProps = Object.values(element.props).reduce((acc: object[], prop) => {
    if (!isElement(prop)) return acc
    const hit = getProps(prop, componentType)
    if (!hit) return acc
    return [...acc, hit]
  }, [])
  return foundProps[0] as any
}
