import { View, StyleSheet } from 'react-native'
import { AnimatedTransform } from './AnimatedTransform'
import { AnimatedStyle, AnimatedObject } from '@autorelease/animated'
import { createStringInterpolator } from 'shared/stringInterpolation'
import { is, Globals } from 'shared'
import colorNames from 'shared/colors'

Globals.assign({
  defaultElement: View,
  colorNames,
  createStringInterpolator,
  applyAnimatedValues: (instance, props) =>
    instance.setNativeProps ? instance.setNativeProps(props) : false,
  createAnimatedTransform: transform => new AnimatedTransform(transform),
  createAnimatedStyle(styles) {
    styles = StyleSheet.flatten(styles)
    if (is.obj(styles.shadowOffset)) {
      styles.shadowOffset = new AnimatedObject(styles.shadowOffset)
    }
    return new AnimatedStyle(styles)
  },
})

export * from './animated'
export * from '@autorelease/core'
