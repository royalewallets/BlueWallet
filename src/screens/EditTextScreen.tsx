import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, StyleSheet, KeyboardType } from 'react-native';

import { Header, InputItem, Button, ScreenTemplate } from 'app/components';
import { EditTextNavigatorParamList, Route } from 'app/consts';

const i18n = require('../../loc');

interface Props {
  navigation: StackNavigationProp<EditTextNavigatorParamList, Route.EditText>;
  route: RouteProp<EditTextNavigatorParamList, Route.EditText>;
}

export interface EditTextProps {
  title: string;
  onSave: (value: string) => void;
  label: string;
  value?: string;
  validate?: (value: string) => string | undefined;
  keyboardType?: KeyboardType;
}

export const EditTextScreen = (props: Props) => {
  const { params } = props.route;
  const label = params.label;
  const keyboardType = params.keyboardType || 'default';
  const header = params.header;
  const onSave = params.onSave;
  const validate = params.validate || null;
  const [value, setValue] = useState(params.value || '');

  const handlePressOnSaveButton = () => {
    onSave(value);
    props.navigation.pop();
  };

  return (
    <ScreenTemplate
      footer={
        <Button
          title={i18n._.save}
          onPress={handlePressOnSaveButton}
          disabled={!value || (!!validate && !!validate(value))}
        />
      }
      header={<Header navigation={props.navigation} isBackArrow={true} title={props.route.params.title} />}
    >
      {header}
      <View style={styles.inputItemContainer}>
        <InputItem
          label={label}
          value={value}
          setValue={setValue}
          autoFocus={true}
          error={value && !!validate && validate(value)}
          keyboardType={keyboardType as KeyboardType}
        />
      </View>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  inputItemContainer: {
    paddingTop: 20,
    width: '100%',
  },
});
