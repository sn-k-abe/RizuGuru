<template>
  <div class="wrapper">
    <Label
      class="label"
      :title="itemData.title"
      :required="itemData.required"
    />
    <b-row class="form-wrapper">
      <ToggleTag
        v-for="(tagData, index) in tagFormList"
        :key="index"
        :dataLength="dataLength"
        :index="index"
        :name="tagData.tagContent"
        :state="tagData.state"
        :action="action"
      />
    </b-row>
  </div>
</template>

<script>
import Label from "@/components/Atoms/Label.vue";
import ToggleTag from "@/components//Atoms/ToggleTag.vue";
export default {
  components: {
    ToggleTag,
    Label,
  },
  data() {
    return {
      dataLength: 12 / this.tagFormList.length,
    };
  },
  props: {
    itemData: Object,
    tagFormList: {
      type: Array,
      required: true,
    },
    state: Boolean,
    action: Function,
  },
};
</script>

<style scoped>
.form-wrapper {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 2.5%;
  background-color: #f6f6f6;
  border-radius: 5px;
}

.label {
  margin-bottom: 15px;
}
</style>
