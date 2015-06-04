import AppDispatcher from '../dispatcher.jsx';
import { EventEmitter } from 'events';
import UIConstants from '../constants/ui.jsx';
import assign from 'object-assign';

var uiData = {
  view : null,
  viewData : null,
  ctx : null,
  pages : [
    { name : 'home', title : 'Home', url : '/home' }
  ]
};

/**
 * All behavior of the UI will be here. Like calculations and
 * sizes. Let the components to be worried about only rendering.
 */
let UIStore = assign({}, EventEmitter.prototype, {
  emitChange() {
    this.emit('change');
  },
  addChangeListener(callback) {
    this.on('change', callback);
  },
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  },
  getView() {
    return uiData.view;
  },
  getCtx() {
    return uiData.ctx;
  },
  getPages() {
    return uiData.pages;
  },
  getViewData() {
    return uiData.viewData;
  }
});

/**
 * Private methods not accessed on the UI Store but throught
 * actions dispatched.
 */
let loadView = (ctx, callback) => {
  let viewName = ctx.params.view ? ctx.params.view : 'home',
    asyncLoad = require('bundle!../components/views/' + viewName),
    numOfViews = uiData.pages.length,
    viewData = null;
  for ( var i=0; i < numOfViews; i++ ) {
    if ( uiData.pages[i].name == viewName ) {
      viewData = uiData.pages[i];
      break;
    }
  }
  asyncLoad(view => {
    uiData.view = view;
    uiData.viewData = viewData;
    uiData.ctx = ctx;
    callback();
  });
};

/**
 * Extends dispatcher with UI Constants from actions. These
 * handle all action exec depending their type.
 */
AppDispatcher.register(action => {
  switch(action.actionType) {

    case UIConstants.UI_LOAD_VIEW :
      loadView(action.ctx, function() {
        UIStore.emitChange();
      });
      break;

  }
});

export default UIStore;