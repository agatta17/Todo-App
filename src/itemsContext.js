import React from 'react';

export const ItemsContext = React.createContext({items: [], onClickDone: null, onClickDelete: null, onEditItem: null, onBlurItem: null, onChangeValue: null, moveItems: null});
