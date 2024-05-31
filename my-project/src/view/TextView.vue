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
        <!-- 축약형 <div :class="{ classTest: vBindClickFlg }">class 테스트</div> -->
        <button v-on:click="chageClass">click me</button>
        <div>5. vue v-if 예제</div>
        <div v-if="showHide">if</div>
        <div v-else-if="!showHide">else if</div>
        <button @click="chageIf">click me</button>
        <div>6. vue v-for 예제</div>
        <ul>
            <li v-for="user in userList" :key="user">
                <div>postId : {{ user.postId }}</div>
                <div>id : {{ user.id }}</div>
                <div>name : {{ user.name }}</div>
                <div>email : {{ user.email }}</div>
                <div>body : {{ user.body }}</div>
            </li>
        </ul>
        <div>-------------------------------------------------</div>
    </div>
</template>

<script>
export default {
    created() {
        this.userList = [
            {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            },
            {
                "postId": 1,
                "id": 2,
                "name": "quo vero reiciendis velit similique earum",
                "email": "Jayne_Kuhic@sydney.com",
                "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
            }
        ];
    },
    data() {
        return {
            name: "Ask",
            clickData: false,
            modelData: "",
            vBindClickFlg: false,
            showHide: false,
            userList: [],
        }
    },
    methods: {
        chageText() {
            this.clickData = !this.clickData;
        },
        chageIf() {
            this.showHide = !this.showHide;
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