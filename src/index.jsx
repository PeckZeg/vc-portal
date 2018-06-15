import { Portal, PortalTarget } from 'portal-vue';
import Vue from 'vue';

import { uniqueId } from 'lodash';

export default {
  name: 'VcPortal',

  props: {
    getContainer: {
      type: Function,
      required: true
    },

    didUpdate: Function,
    targetClass: [String, Object, Array],
  },

  data() {
    return {
      name: uniqueId('portal')
    }
  },

  mounted() {
    this.createContainer();
  },

  updated() {
    if (this.didUpdate) {
      this.didUpdate();
    }
  },

  beforeDestroy() {
    this.removeContainer();
  },

  methods: {
    createContainer() {
      const { targetClass, name } = this;
      const el = document.createElement('div');

      this._container = this.getContainer();
      this._container.appendChild(el);

      this._target = new Vue({
        el,
        ...PortalTarget,
        class: 'test',
        propsData: {
          name,
          attributes: {
            class: targetClass
          }
        }
      });

      this.$forceUpdate();
    },

    removeContainer() {
      if (this._target) {
        this._target.$el.remove();
      }
    }
  },

  render() {
    if (this._container) {
      const { name } = this;

      return (
        <Portal to={name}>
          {this.$slots.default}
        </Portal>
      );
    }

    return null;
  }
};
