<template>
  <div class="enrolment">
    <div class="rpl-grid">
      <div class="rpl-col-12 rpl-col-start-1">
        <div class="rpl-grid">
          <div class="rpl-col-2" style="margin-left: 1.5rem">
            <div class="rpl-card rpl-u-padding-8">
              <h2 class="rpl-type-h2-fixed rpl-u-margin-b-4 rpl-u-margin-t-4">
                INSTITUTION DETAILS
              </h2>
              <p class="rpl-type-p rpl-u-margin-b-4">Name: ABC Kids</p>
              <p class="rpl-type-p rpl-u-margin-b-4">Number of Campuses: 5</p>
              <button
                class="institution rpl-type-h3-fixed rpl-u-padding-8 rpl-u-margin-b-4"
                id="selected-button"
              >
                <div class="grey-square"></div>
                CBD
              </button>
              <button
                class="institution rpl-type-h3-fixed rpl-u-padding-8 rpl-u-margin-b-4"
                id="ignore-hover-button"
              >
                <div class="grey-square"></div>
                Frankston
              </button>
              <button
                class="institution rpl-type-h3-fixed rpl-u-padding-8 rpl-u-margin-b-4"
                id="ignore-hover-button"
              >
                <div class="grey-square"></div>
                Mulgrave
              </button>
              <button
                class="institution rpl-type-h3-fixed rpl-u-padding-8 rpl-u-margin-b-4"
                id="ignore-hover-button"
              >
                <div class="grey-square"></div>
                Fitzroy
              </button>
              <button
                class="institution rpl-type-h3-fixed rpl-u-padding-8 rpl-u-margin-b-4"
                id="ignore-hover-button"
              >
                <div class="grey-square"></div>
                Doncaster
              </button>
            </div>
          </div>
          <div class="rpl-col-5 rpl-col-start-3">
            <div class="rpl-card rpl-u-padding-8">
              <h2 class="rpl-type-h2-fixed rpl-u-margin-b-4 rpl-u-margin-t-4">
                CBD Campus
              </h2>
              <p class="rpl-type-p rpl-u-margin-b-8">
                Number of Classes in Campus: 6
              </p>
              <hr />
              <button class="class-btn" id="selected-button">
                <div class="class-btn-heading">
                  <div class="grey-line"></div>
                  <div>
                    <h3 class="rpl-type-h3-fixed">CLASS 1A</h3>
                    <p class="rpl-type-p">Class Details</p>
                  </div>
                </div>
                <RplIcon
                  name="icon-arrow-right"
                  colour="default"
                  class="arrow-icon"
                />
              </button>
              <hr />
              <button class="class-btn" id="ignore-hover-button">
                <div class="class-btn-heading">
                  <div class="grey-line"></div>
                  <div>
                    <h3 class="rpl-type-h3-fixed">CLASS 1B</h3>
                    <p class="rpl-type-p">Class Details</p>
                  </div>
                </div>
                <RplIcon
                  name="icon-arrow-right"
                  colour="default"
                  class="arrow-icon"
                />
              </button>
              <hr />
              <button class="class-btn" id="ignore-hover-button">
                <div class="class-btn-heading">
                  <div class="grey-line"></div>
                  <div>
                    <h3 class="rpl-type-h3-fixed">CLASS 1C</h3>
                    <p class="rpl-type-p">Class Details</p>
                  </div>
                </div>
                <RplIcon
                  name="icon-arrow-right"
                  colour="default"
                  class="arrow-icon"
                />
              </button>
              <hr />
              <button class="class-btn" id="ignore-hover-button">
                <div class="class-btn-heading">
                  <div class="grey-line"></div>
                  <div>
                    <h3 class="rpl-type-h3-fixed">CLASS 1D</h3>
                    <p class="rpl-type-p">Class Details</p>
                  </div>
                </div>
                <RplIcon
                  name="icon-arrow-right"
                  colour="default"
                  class="arrow-icon"
                />
              </button>
              <hr />
              <button class="class-btn" id="ignore-hover-button">
                <div class="class-btn-heading">
                  <div class="grey-line"></div>
                  <div>
                    <h3 class="rpl-type-h3-fixed">CLASS 2A</h3>
                    <p class="rpl-type-p">Class Details</p>
                  </div>
                </div>
                <RplIcon
                  name="icon-arrow-right"
                  colour="default"
                  class="arrow-icon"
                />
              </button>
              <hr />
              <button class="class-btn" id="ignore-hover-button">
                <div class="class-btn-heading">
                  <div class="grey-line"></div>
                  <div>
                    <h3 class="rpl-type-h3-fixed">CLASS 2B</h3>
                    <p class="rpl-type-p">Class Details</p>
                  </div>
                </div>
                <RplIcon
                  name="icon-arrow-right"
                  colour="default"
                  class="arrow-icon"
                />
              </button>
              <hr />
            </div>
          </div>
          <div class="rpl-col-5 rpl-col-start-8" style="margin-right: 1.5rem">
            <div class="rpl-card rpl-u-padding-8">
              <h2 class="rpl-type-h2-fixed rpl-u-margin-b-4 rpl-u-margin-t-4">
                CBD Campus | Class 1A
              </h2>
              <p class="rpl-type-p rpl-u-margin-b-8">
                Students enrolled at the CBD Campus
              </p>
              <h3 class="rpl-type-h3-fixed">Add Students</h3>
              <div class="add-students">
                <a @click="removeUser(), addUser()" href="#" style="width: 50px"
                  ><PlusIcon
                    class="h-6 w-6 text-blue-250"
                    style="color: #0052c2"
                /></a>
                <div
                  v-for="(profile, index) in profiles"
                  :key="profile.id"
                  class="profile-item"
                >
                  <a
                    @click="
                      removeUser(index),
                        addUser(
                          profile.id,
                          profile.name,
                          profile.DOB,
                          profile.ATSI
                        )
                    "
                    href="#"
                    ><UserIcon style="color: #0052c2"
                  /></a>
                  <p class="rpl-type-label-small" style="text-align: center">
                    {{ profile.name }}
                  </p>
                </div>
              </div>
              <hr />
              <div class="enrolled-heading">
                <h3 class="rpl-type-h3-fixed">
                  Students currently enrolled in Class 1A
                </h3>
                <RplSearchBar
                  variant="reverse"
                  id="reverse"
                  style="width: 20rem"
                />
              </div>
              <div class="enrol-students">
                <div class="rpl-table">
                  <div class="rpl-table__scroll-container" tabindex="0">
                    <table>
                      <tbody>
                        <tr v-for="student in enrolled" :key="enrolled.id">
                          <td class="enrolled-cell-row">
                            <div style="display: inline-block">
                              <UserIcon style="color: #0052c2; width: 5rem" />
                            </div>
                            <div
                              style="
                                display: inline-block;
                                vertical-align: top;
                                margin-top: 2rem;
                              "
                            >
                              <p
                                class="rpl-type-label-small rpl-type-weight-bold"
                              >
                                {{ student.name }}
                              </p>
                            </div>
                          </td>
                          <td class="enrolled-cell-row">
                            <p
                              class="rpl-type-label-small rpl-type-weight-bold"
                            >
                              DOB
                            </p>
                            <p>{{ student.DOB }}</p>
                          </td>
                          <td class="enrolled-cell-row">
                            <p
                              class="rpl-type-label-small rpl-type-weight-bold"
                            >
                              ATSI
                            </p>
                            <p>{{ student.ATSI }}</p>
                          </td>
                          <td>
                            <EllipsisHorizontalIcon
                              style="
                                color: #0052c2;
                                width: 4rem;
                                justify-content: center;
                                display: flex;
                                justify-content: center;
                              "
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profiles: [
        {
          id: 1,
          name: "Aria Chang",
          DOB: "09/04/2019",
          ATSI: "No",
        },
        {
          id: 2,
          name: "Kirra Mununjali",
          DOB: "27/08/2019",
          ATSI: "Yes",
        },
        {
          id: 3,
          name: "Malik Khan",
          DOB: "30/10/2019",
          ATSI: "No",
        },
        {
          id: 4,
          name: "Jessie Montes",
          DOB: "12/02/2019",
          ATSI: "No",
        },
        {
          id: 5,
          name: "Levi Lucas",
          DOB: "22/01/2019",
          ATSI: "No",
        },
      ],
      enrolled: [],
    };
  },
  methods: {
    removeUser(index) {
      this.profiles.splice(index, 1);
    },
    addUser(id, name, DOB, ATSI) {
      this.enrolled.push({
        id: id,
        name: name,
        DOB: DOB,
        ATSI: ATSI,
      });
    },
  },
};
</script>

<script setup>
import { RplIcon, RplSearchBar, RplButton } from "@dpc-sdp/ripple-ui-core/vue";
import {
  UserIcon,
  PlusIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/vue/24/solid";
</script>

<style>
@media (min-width: 1024px) {
  .enrolled-cell-row {
    width: 30rem;
  }
  .profile-item {
    margin-right: 2rem;
    margin-left: 2rem;
    width: 5rem;
    align-items: center;
  }
  #selected-button {
    background-color: #e6f5fd;
  }
  #ignore-hover-button:hover {
    background-color: white;
  }
  .enrolment {
    margin-top: 4.5rem;
    min-height: 60vh;
    display: flex;
    align-items: center;
  }
  .institution {
    border-radius: var(--rpl-border-radius-4);
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .institution:hover {
    background-color: var(--rpl-clr-accent-alt);
  }
  .class-btn {
    border-radius: var(--rpl-border-radius-4);
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 18px 0 18px 0;
  }
  .class-btn-heading {
    display: flex;
  }
  .class-btn:hover {
    background-color: var(--rpl-clr-accent-alt);
  }
  .grey-square {
    background-color: lightgray;
    width: 20px;
    height: 20px;
    margin: 0 10px 0 0;
  }
  .grey-line {
    background-color: lightgray;
    width: 5px;
    height: 50px;
    margin: 0 20px 0 0;
    border-radius: var(--rpl-border-radius-full);
  }
  .arrow-icon {
    justify-self: flex-end;
  }
  .add-students {
    display: flex;
    flex-direction: row;
    justify-items: center;
    width: 100%;
    margin: 10px 0 30px 0;
  }
  .student-icon {
    background-color: aliceblue;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin: 0 30px 0 0;
  }
  .enrolled-heading {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .avatar-card {
    width: 150px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0.5px solid var(--rpl-clr-neutral-200);
    margin: 5px;
  }
  .avatar-img {
    width: 150px;
    height: 150px;
  }
  .enrol-students {
    display: flex;
    flex-direction: row;
    justify-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin: 10px 0 30px 0;
  }
}
</style>
