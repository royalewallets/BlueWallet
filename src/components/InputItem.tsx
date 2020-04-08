import React, { Component } from 'react';
import { StyleSheet, TextInput as BaseTextInput, View, Text, Animated } from 'react-native';

import { palette, typography, fonts } from 'styles';

interface Props {
  label: string;
  suffix?: string;
  error?: string;
}

interface State {
  isAnimatedFocused: Animated.Value;
  value: string;
}

export class InputItem extends Component<Props, State> {
  state = {
    isAnimatedFocused: new Animated.Value(0),
    value: '',
  };

  onFocus = () => {
    // @ts-ignore
    Animated.timing(this.state.isAnimatedFocused, {
      toValue: 1,
      duration: 200,
    }).start();
  };

  onBlur = () => {
    if (!this.state.value) {
      // @ts-ignore
      Animated.timing(this.state.isAnimatedFocused, {
        toValue: 0,
        duration: 200,
      }).start();
    }
  };

  onChangeText = (text: string) => {
    this.setState({ value: text });
  };

  render() {
    const { isAnimatedFocused } = this.state;
    const { label, suffix, error } = this.props;

    const top = this.state.isAnimatedFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [12, -8],
    });
    const fontSize = isAnimatedFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 12],
    });
    return (
      <View style={styles.container}>
        <Animated.Text style={[styles.label, { top, fontSize }]}>{label}</Animated.Text>
        {!!suffix && <Text style={styles.suffix}>{suffix}</Text>}
        <BaseTextInput
          {...this.props}
          style={[styles.input, !!suffix && styles.isSuffix, !!error && styles.isError]}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChangeText={this.onChangeText}
        />
        {!!error && <Text style={styles.error}>{error}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 53,
  },
  label: {
    position: 'absolute',
    left: 0,
    color: palette.textGrey,
    fontFamily: fonts.ubuntu.light,
  },
  input: {
    paddingRight: 50,
    height: 43,
    borderBottomColor: palette.border,
    borderBottomWidth: 1,
    ...typography.caption,
  },
  isSuffix: {
    paddingRight: 50,
  },
  isError: {
    borderBottomColor: palette.error,
  },
  suffix: {
    position: 'absolute',
    right: 0,
    top: 12,
    ...typography.caption,
    lineHeight: 19,
  },
  error: {
    marginTop: 3,
    ...typography.subtitle2,
    color: palette.error,
  },
});
