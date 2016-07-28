export const CHANGE_DAY = 'CHANGE_DAY';
export const SET_HOURS = 'SET_HOURS';

export function changeDay(day, open, close, index) {
  return {
    type: CHANGE_DAY,
    day,
    open,
    close,
    index
  }
}

export function setHours(index, initialOpen, initialClose) {
  return {
    type: SET_HOURS,
    initialOpen,
    initialClose,
  }
}
