<template>
  <mySidebar></mySidebar>
  <div class="container">
    <div class="row">
      <div class="col-4"></div>
      <div class="col-7">

          <div class="card">
            <div class="card-title text-center mt-2">
              <h3>İzin Talepleri</h3>
            </div>
                
                <div class="card-body">
                    <tr v-for="list in ticketList" :key="list.id">
                                                <td>
                            {{list.attributes.ticketDay}}
                        </td>
                    </tr>
                </div>
            
          </div>

      </div>
    </div>
  </div>
</template>

<script>
import mySidebar from "@/ui/components/mySidebar.vue";
import axios from "axios";
export default {
  data() {
    return {
      ticketList: [],
    };
  },
  components: {
    mySidebar,
  },
  async created() {
    await axios
      .get("api/tickets")
      .then((response) => (this.ticketList = response.data.data));

    console.log("this.ticketList :>> ", this.ticketList);
  },
};
</script>

<style>
.card {
  margin-top: 20%;
}
</style>
