import React from 'react'
import { useSpring } from './useSpring'
import { useTrail } from './useTrail'
import { useTransition } from './useTransition'
import { is } from 'shared'

export function Spring({ children, ...props }) {
  return children(useSpring(props))
}

export function Trail({ items, children, ...props }) {
  const trails = useTrail(items.length, props)
  return items.map((item, index) => {
    const result = children(item, index)
    return is.fun(result) ? result(trails[index]) : result
  })
}

export function Transition({ items, children, ...props }) {
  return useTransition(items, props)(children)
}
