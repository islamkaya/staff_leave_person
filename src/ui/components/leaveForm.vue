<template>
  <div class="container">
    <div class="row">
      <div class="col-4"></div>
      <div class="col-7">
        <div class="card">
          <div class="card-body">
            <div class="card-title">
              <h2 class="text-center mb-3">{{ localization.leaveForm }}</h2>
            </div>
            <div class="input-group mb-3">
              <label class="input-group-text">{{
                localization.leaveType
              }}</label>
              <select class="form-select" @change="onChange()" v-model="ticketTypeList">
                <option>{{ localization.choise }}</option>
                <option              
                  v-for="tickets in ticketTypeList"
                  :key="tickets.value"
                >
                  {{ tickets.attributes.ticketType}}
                </option>
              </select>
            </div>
            <form @submit.prevent="postTicket">
              <div class="input-group mb-3">
                <span class="input-group-text">{{
                  localization.leaveDate
                }}</span>
                <div class="form-control">
                  <dateRangePicker v-model="date" />
                </div>
                <div class="input-group mt-3 mb-3">
                  <span class="input-group-text">{{
                    localization.leaveDay
                  }}</span>
                  <input
                    v-model="leaveDay"
                    type="number"
                    class="form-control"
                  />
                </div>

                <div class="input-group">
                  <span class="input-group-text">{{
                    localization.description
                  }}</span>
                  <textarea
                    v-model="description"
                    class="form-control"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-primary mx-auto mt-3">
                  Primary
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import dateRangePicker from "@/ui/components/dateRangePicker.vue";
import { tr } from "@/lang";
export default {
  data() {
    return {
      localization: "",
      ticketTypeList: [],
      leaveDay: "",
      description: "",
      date:"",
      paternityLeave:"",
      maternityLeave:"",
      educationLeave:"",
      marriageLeave:"",
      sickLeave:"",
      personelLeave:"",
      selectedTicket:"",
      
    };
  },

  
  async created() {
    this.localization = tr;
    await axios
      .get("api/leave-types")
      .then((response) => {
        for(let i = 0; i < response.data.data.length; i++){
          this.ticketTypeList = response.data.data
          console.log(this.ticketTypeList[i].id);
        }
        this.paternityLeave = response.data.data[3]
        this.maternityLeave = response.data.data[2]
        this.educationLeave = response.data.data[4]
        this.marriageLeave = response.data.data[5]
        this.sickLeave = response.data.data[1]
        this.personelLeave = response.data.data[6]
               });
  },

  components: {
    dateRangePicker,
  },

  methods: {
    onChange(){
        if (this.ticketTypeList == "Babalık İzni") {
          return this.ticketTypeList === 3
        }
    },
    async postTicket() {
      const jwt = localStorage.getItem("Token");
      console.log(this.selectedTicket);
      const header = {
        headers: {
          "Content-Type": "application/json",
          Authorization: jwt,
        },
      };

      const data = {
        leaveStartDate: this.date[0],
        leaveEndDate: this.date[1],
        ticketDescription: this.description,
        ticketDay: this.leaveDay,
        ticketType: this.ticketTypeList
      };

      try {
        await axios.post("/api/createticket", data, header);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 20%;
}
</style>
