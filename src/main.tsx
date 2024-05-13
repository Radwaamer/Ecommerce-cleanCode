import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from '@routes/AppRouter';

// // styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/global.css';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
