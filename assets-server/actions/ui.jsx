import AppDispatcher from '../dispatcher.jsx';
import UIConstants from '../constants/ui.jsx';

let UIActions = {

  loadView(ctx) {
    AppDispatcher.dispatch({
      actionType : UIConstants.UI_LOAD_VIEW,
      ctx : ctx
    });
  }

};

export default UIActions;