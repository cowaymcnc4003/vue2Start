<template>
    <div class="container">
        <h2>User Profile</h2>
        <!--사용자 정보-->
        <user-profile>
            <div slot="username">{{ fetchedUserList.id }}</div>
            <span slot="time">{{ 'Joined' + fetchedUserList.created }}</span>
            <span slot="karma">{{ fetchedUserList.karma }}</span>
        </user-profile>
        <control-view v-model="checked"></control-view>
        <!-- <div class="user-container">
            <div>
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="user-description">
                <div>{{ fetchedUserList.id }}</div>
                <div class="time">
                    <span>{{ 'Joined' + fetchedUserList.created }}, </span>
                </div>
                <span>{{ fetchedUserList.karma }}</span>
            </div>
        </div> -->
        <!--사용자 정보-->
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserProfile from '../components/UserProfile.vue';
import ControlView from './ControlView.vue';
export default {
  components: { UserProfile, ControlView },
    computed: {
        ...mapGetters(['fetchedUserList']),
    },
    data() {
        return {
            checked : true,
        }
    },
    created() {
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_USERLIST', itemId);
    },
}
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
}

.fa-user {
    font-size: 2.5rem;
}

.user-description {
    padding-left: 8px;
}

.time {
    font-size: 0.7rem;
}
</style>