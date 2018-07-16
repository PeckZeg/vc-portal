export default {
  name: 'ExamC1',

  inject: [
    'app'
  ],

  mounted() {
    console.log(this);
  },

  render() {
    return (
      <div class="exam-c1">
        EXAM_C1

        <div class="exam-c1-slot-default">
          {this.$slots.default}
        </div>
      </div>
    );
  }
};
