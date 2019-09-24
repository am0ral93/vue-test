import { createHelpers } from 'vuex-map-fields';

const { getNewCourseField, updateNewCourseField } = createHelpers({
    getterType: 'getNewCourseField',
    mutationType: 'updateNewCourseField',
});

const state = () => ({
    name: '',
    category: null,
    time: null,
});

const getters = {
    getNewCourseField,
};

const actions = {

};

const mutations = {
    updateNewCourseField,
};

export default {
    state,
    getters,
    actions,
    mutations
}
