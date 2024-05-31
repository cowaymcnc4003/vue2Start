<template>
    <div>
        <div>-------------------------------------------------</div>
        <div>1. vue 데이터 Data Binding</div>
        {{ name }}
        <div>2. vue v-on 예제</div>
        <div>
            {{ clickData }}
        </div>
        <button v-on:click="chageText">click me</button>
        <!-- 축약형 <button @click="chageText">click me</button> -->
        <div>3. vue v-model 예제</div>
        <input type="text" v-model="modelData">
        <div>v-model text 예제 : {{ modelData }}</div>
        <div>4. vue v-bind 예제</div>
        <div v-bind:class="{ classTest: vBindClickFlg }">class 테스트</div>
        <button v-on:click="chageClass">click me</button>
        <div>-------------------------------------------------</div>
        </div>
</template>

<script>
export default {
    created() {

    },
    data() {
        return {
            name: "Ask",
            clickData: false,
            modelData: "",
            vBindClickFlg: false
        }
    },
    methods: {
        chageText() {
            this.clickData = !this.clickData;
        },
        chageClass() {
            this.vBindClickFlg = !this.vBindClickFlg;
        },
    },
}
</script>

<style scoped>
.classTest {
    color: blue;
}
</style>>