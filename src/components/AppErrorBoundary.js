import {React, Component} from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

class AppErrorBoundary extends Component {
    state = { error: false, errorMessage: '' };
  
    static getDerivedStateFromError(error) {
      return { error: true, errorMessage: error.toString() };
    }
  
    componentDidCatch(error, errorInfo) {
      console.log({ error, errorInfo });
    }
  
    render() {
      const { error, errorMessage } = this.state;
      const { children } = this.props;
  
      return error ? <LoadingSpinner Error={this.state.errorMessage} /> : children;
    }
  }

  export default AppErrorBoundary;