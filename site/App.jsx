import VcPortal from '~/index';

import './style.css';

export default {
  name: 'App',

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
      this.visible = !this.visible
    }
  },

  render() {
    const { count, visible } = this;

    return (
      <div id="app">
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
