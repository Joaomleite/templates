import React, { useCallback } from 'react';
import { componentService } from '../service/axiosServer';
import { TipoComponente } from '../types/models';

export function useComponent() {
  const getComponentsTypes = useCallback(async (cb: (data: TipoComponente[]) => void) => {
    try {
      let res = await componentService.getComponentsTypes();
      cb(res.data.content);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return {
    getComponentsTypes,
  };
}
