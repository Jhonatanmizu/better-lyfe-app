import { AUTH_SCREENS } from '@modules/auth/constants';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AuthRoutesParamsList = {
  [AUTH_SCREENS.LOGIN]: undefined;
  [AUTH_SCREENS.REGISTER]: undefined;
  [AUTH_SCREENS.FORGOT_PASSWORD]: undefined;
};

export type AuthRoutesStack = NativeStackNavigationProp<AuthRoutesParamsList>;
