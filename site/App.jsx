import VcPortal from '~/index';
import C1 from './C1';
import C2 from './C2';

import './style.css';

export default {
  name: 'App',

  provide() {
    return {
      app: this
    };
  },

  data() {
    return {
      count: 0,
      visible: true
    };
  },

  methods: {
    incrementCount() {
      this.count = this.count + 1;
    },

    onToggle() {
      this.visible = !this.visible;
    }
  },

  render() {
    const { count, visible } = this;

    return (
      <div id="app">
        <h2><code>provide</code> / <code>inject</code></h2>

        <VcPortal
          provide={this.$options.provide()}
          getContainer={() => document.body}
        >
          <C1>
            <C2 />
          </C1>
        </VcPortal>

        <h2>Normal</h2>
        <pre>{JSON.stringify({ count, visible }, null, 2)}</pre>

        <button onClick={this.incrementCount}>increment</button>
        <button onClick={this.onToggle}>toggle</button>

        {visible && (
          <VcPortal
            targetClass="test"
            getContainer={() => document.body}
          >
            <pre onClick={this.incrementCount}>
              {JSON.stringify({ count: this.count }, null, 2)}
            </pre>
          </VcPortal>
        )}
      </div>
    );
  }
};
