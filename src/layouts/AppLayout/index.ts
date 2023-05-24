import AppLayout from './AppLayout';

import Header from './src/sections/Header';
import Sidebar from './src/sections/Sidebar';
import MobileSidebar from './src/sections/MobileSidebar';
import InnerWrapper from './src/sections/InnerWrapper';
import { IMenuItemProps } from "./src/components/Menu/components/MenuItem";

export type {
  IMenuItemProps
}

export {
  AppLayout as Wrapper,
  Header,
  Sidebar as Aside,
  MobileSidebar as MAside,
  InnerWrapper as Inner,
}

export default {
  Wrap: AppLayout,
  Header,
  Aside: Sidebar,
  MAside: MobileSidebar,
  Inner: InnerWrapper,
};


