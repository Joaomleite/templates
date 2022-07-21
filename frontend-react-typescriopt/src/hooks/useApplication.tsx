import { useCallback, useContext } from 'react';
import { ApplicationContext, ApplicationContextData } from '../context/ApplicationContext';

export function useApplication() {
  const { menuState, setMenuState } = useContext<ApplicationContextData>(ApplicationContext);

  const openMenu = useCallback(() => {
    setMenuState(true);
  }, [setMenuState]);
  const closeMenu = useCallback(() => {
    setMenuState(false);
  }, [setMenuState]);

  return {
    menuState,
    openMenu,
    closeMenu,
  };
}
