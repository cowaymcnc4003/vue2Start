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
            <li v-for="user in userList" :key="user.id">
                <div>postId : {{ user.postId }}</div>
                <div>id : {{ user.id }}</div>
                <div>name : {{ user.name }}</div>
                <div>email : {{ user.email }}</div>
                <div>body : {{ user.body }}</div>
            </li>
        </ul>
        <div>7. computed</div>
        <!-- <div>number1 : {{ number1 }}</div>
        <div>number2 : {{ number2 }}</div> -->
        <div>number1 method : {{ chageSum1() }}</div>
        <div>number2 computed : {{ chageSum2 }}</div>
        <button @click="number1 = 5;">number1 add click me</button>
        <button @click="number2 = 5;">number1 add click me</button>
        <!-- <button @click="number2++">number2 add click me</button> -->
        <!-- <button @click="chageSum">click me</button> -->
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
            number1: 0,
            number2: 0,
            sumNumber: 1,
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
        chageSum1() {
            console.log(`methods this.number2 ${this.number1}`);
            return this.number1;
        },
    },
    computed: {
        chageSum2() {
            console.log(`computed this.number2 ${this.number2}`);
            return this.number2;
        },
    }
}
</script>

<style scoped>
.classTest {
    color: blue;
}
</style>>