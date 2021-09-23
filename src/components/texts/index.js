import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { appStyles, colors, fontFamily, sizes, appIcons } from '../../services';

// Title Texts
export const XXLTitle = ({style,onPress,children}) => {
    return (
        <Text
            style={[styles.xxlTitleStyle, style]}
            onPress={onPress}
        >
            {children}
        </Text>
    );
}
export const XLTitle = ({style,onPress,children}) => {
    return (
        <Text
            style={[styles.xlTitleStyle, style]}
            onPress={onPress}
        >
            {children}
        </Text>
    );
}
export const LargeTitle = ({style,onPress,children}) => {
    return (
        <Text
            style={[styles.largeTitleStyle, style]}
            onPress={onPress}
        >
            {children}
        </Text>
    );
}
export const MediumTitle = ({style,onPress,children}) => {
    return (
        <Text
            style={[styles.mediumTitleStyle, style]}
            onPress={onPress}
        >
            {children}
        </Text>
    );
}
export const SmallTitle = ({style,onPress,children}) => {
    return (
        <Text
            style={[styles.smallTitleStyle, style]}
            onPress={onPress}
        >
            {children}
        </Text>
    );
}
export const TinyTitle = ({style,onPress,children}) => {
    return (
        <Text
            style={[styles.tinyTitleStyle, style]}
            onPress={onPress}
        >
            {children}
        </Text>
    );
}
// Normal Texts
export const LargeText = ({style,onPress,children}) => {
    return (
        <Text
            style={[styles.largeTextStyle, style]}
            onPress={onPress}
        >
            {children}
        </Text>
    );
}
export const Medium = ({style,onPress,children}) => {
    return (
        <Text
            style={[styles.mediumTextStyle, style]}
            onPress={onPress}
        >
            {children}
        </Text>
    );
}
export const Regular = ({style,onPress,children,numberOfLines}) => {
    return (
        <Text
            numberOfLines={numberOfLines}
            style={[styles.regularTextStyle, style]}
            onPress={onPress}
        >
            {children}
        </Text>
    );
}
export const Small = ({style,onPress,children}) => {
    return (
        <Text
            style={[styles.smallTextStyle, style]}
            onPress={onPress}
        >
            {children}
        </Text>
    );
}
export const Tiny = ({style,onPress,children}) => {
    return (
        <Text
            style={[styles.tinyTextStyle, style]}
            onPress={onPress}
        >
            {children}
        </Text>
    );
}
export const Input = ({style,children}) => {
    return (
        <Text
            style={[styles.inputTitleStyle, style]}
        >
            {children}
        </Text>
    );
}

export const ButtonRegular = ({style,children}) => {
    return (
        <Text
            style={[styles.ButtonTextRegularStyle, style]}
        >
            {children}
        </Text>
    );
}
export const ButtonMedium = ({style,children}) => {
    return (
        <Text
            style={[styles.ButtonTextMediumStyle, style]}
        >
            {children}
        </Text>
    );
}





const styles = StyleSheet.create({
    xxlTitleStyle: {
        ...appStyles.h1
    },
    xlTitleStyle: {
        ...appStyles.h2
    },
    largeTitleStyle: {
        ...appStyles.h3
    },
    mediumTitleStyle: {
        ...appStyles.h4
    },
    smallTitleStyle: {
        ...appStyles.h5
    },
    tinyTitleStyle: {
        ...appStyles.h6,
        fontFamily: fontFamily.appTextBold
    },
    largeTextStyle: {
        ...appStyles.textLarge
    },
    mediumTextStyle: {
        ...appStyles.textMedium
    },
    regularTextStyle: {
        ...appStyles.textRegular
    },
    smallTextStyle: {
        ...appStyles.textSmall
    },
    tinyTextStyle: {
        ...appStyles.textTiny
    },
    inputTitleStyle: {
        ...appStyles.textTiny,
        //color: colors.appColor1
    },
    ButtonTextRegularStyle: {
        ...appStyles.ButtonRegular,
        //color: colors.appColor1
    },
    ButtonTextMediumStyle:{
        ...appStyles.ButtonMedium,
        //color: colors.appColor1
    },

});

