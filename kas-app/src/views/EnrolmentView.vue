<template>
  <div class="enrolment">
    <div class="rpl-grid">
      <div class="rpl-col-10 rpl-col-start-2">
        <div class="rpl-grid">
          <div class="rpl-col-2">
            <div class="rpl-card rpl-u-padding-8">
              <h2 class="rpl-type-h2-fixed rpl-u-margin-b-4 rpl-u-margin-t-4">
                INSTITUTION DETAILS
              </h2>
              <p class="rpl-type-p rpl-u-margin-b-4">
                Funding for public-facing small businesses to purchase equipment and
                upgrades to improve ventilation and reduce the spread of COVID-19 and
                boost customer confidence.
              </p>
              <button class="institution rpl-type-h3-fixed rpl-u-padding-8 rpl-u-margin-b-4">
                <div class="grey-square"></div>
                CBD
              </button>
              <button class="institution rpl-type-h3-fixed rpl-u-padding-8 rpl-u-margin-b-4">
                <div class="grey-square"></div>
                Frankston
              </button>
              <button class="institution rpl-type-h3-fixed rpl-u-padding-8 rpl-u-margin-b-4">
                <div class="grey-square"></div>
                Mulgrave
              </button>
              <button class="institution rpl-type-h3-fixed rpl-u-padding-8 rpl-u-margin-b-4">
                <div class="grey-square"></div>
                Fitzroy
              </button>
              <button class="institution rpl-type-h3-fixed rpl-u-padding-8 rpl-u-margin-b-4">
                <div class="grey-square"></div>
                Doncaster
              </button>
            </div>
          </div>
          <div class="rpl-col-4 rpl-col-start-3">
            <div class="rpl-card rpl-u-padding-8">
              <h2 class="rpl-type-h2-fixed rpl-u-margin-b-4 rpl-u-margin-t-4">
                CLASS
              </h2>
              <p class="rpl-type-p rpl-u-margin-b-8">
                Funding for public-facing small businesses to purchase equipment and
                upgrades to improve ventilation and reduce the spread of COVID-19 and
                boost customer confidence.
              </p>
              <hr>
              <button class="class-btn"> 
                <div class="class-btn-heading">
                  <div class="grey-line"></div>
                  <div>
                    <h3 class="rpl-type-h3-fixed">CLASS 1A</h3>
                    <p class="rpl-type-p">Class Details</p>
                  </div>
                </div>
                <RplIcon name="icon-arrow-right" colour="default" class="arrow-icon"/>
              </button>
              <hr>
              <button class="class-btn"> 
                <div class="class-btn-heading">
                  <div class="grey-line"></div>
                  <div>
                    <h3 class="rpl-type-h3-fixed">CLASS 1B</h3>
                    <p class="rpl-type-p">Class Details</p>
                  </div>
                </div>
                <RplIcon name="icon-arrow-right" colour="default" class="arrow-icon"/>
              </button>
              <hr>
              <button class="class-btn"> 
                <div class="class-btn-heading">
                  <div class="grey-line"></div>
                  <div>
                    <h3 class="rpl-type-h3-fixed">CLASS 1C</h3>
                    <p class="rpl-type-p">Class Details</p>
                  </div>
                </div>
                <RplIcon name="icon-arrow-right" colour="default" class="arrow-icon"/>
              </button>
              <hr>
              <button class="class-btn"> 
                <div class="class-btn-heading">
                  <div class="grey-line"></div>
                  <div>
                    <h3 class="rpl-type-h3-fixed">CLASS 1D</h3>
                    <p class="rpl-type-p">Class Details</p>
                  </div>
                </div>
                <RplIcon name="icon-arrow-right" colour="default" class="arrow-icon"/>
              </button>
              <hr>
              <button class="class-btn"> 
                <div class="class-btn-heading">
                  <div class="grey-line"></div>
                  <div>
                    <h3 class="rpl-type-h3-fixed">CLASS 2A</h3>
                    <p class="rpl-type-p">Class Details</p>
                  </div>
                </div>
                <RplIcon name="icon-arrow-right" colour="default" class="arrow-icon"/>
              </button>
              <hr>
              <button class="class-btn"> 
                <div class="class-btn-heading">
                  <div class="grey-line"></div>
                  <div>
                    <h3 class="rpl-type-h3-fixed">CLASS 2B</h3>
                    <p class="rpl-type-p">Class Details</p>
                  </div>
                </div>
                <RplIcon name="icon-arrow-right" colour="default" class="arrow-icon"/>
              </button>
              <hr>
            </div>
          </div>
          <div class="rpl-col-4 rpl-col-start-7">
            <div class="rpl-card rpl-u-padding-8">
              <h2 class="rpl-type-h2-fixed rpl-u-margin-b-4 rpl-u-margin-t-4">
                CHILDREN
              </h2>
              <p class="rpl-type-p rpl-u-margin-b-8">
                Funding for public-facing small businesses to purchase equipment and
                upgrades to improve ventilation and reduce the spread of COVID-19 and
                boost customer confidence.
              </p>
              <h3 class="rpl-type-h3-fixed">Add Students</h3>
              <div class="add-students">
                  <img class="student-icon" src="../assets/images/avatar.jpeg" />
                  <img class="student-icon" src="../assets/images/avatar.jpeg" />
                  <img class="student-icon" src="../assets/images/avatar.jpeg" />
                  <img class="student-icon" src="../assets/images/avatar.jpeg" />
                  <img class="student-icon" src="../assets/images/avatar.jpeg" />
                  <img class="student-icon" src="../assets/images/avatar.jpeg" />
              </div>
              <hr>
              <div class="enrolled-heading"> 
                <h3 class="rpl-type-h3-fixed">Enrolled</h3>
                <RplSearchBar
                  variant="reverse"
                  id="reverse"
                />
              </div>
              <div class="enrol-students">
                <div class="avatar-card"> 
                  <img class="avatar-img" src="../assets/images/avatar.jpeg" />
                  <p class="rpl-type-p rpl-type-weight-bold rpl-u-margin-t-2">Bobby Joe</p>
                </div>
                <div class="avatar-card"> 
                  <img class="avatar-img" src="../assets/images/avatar.jpeg" />
                  <p class="rpl-type-p rpl-type-weight-bold rpl-u-margin-t-2">Bobby Joe</p>
                </div>
                <div class="avatar-card"> 
                  <img class="avatar-img" src="../assets/images/avatar.jpeg" />
                  <p class="rpl-type-p rpl-type-weight-bold rpl-u-margin-t-2">Bobby Joe</p>
                </div>
                <div class="avatar-card"> 
                  <img class="avatar-img" src="../assets/images/avatar.jpeg" />
                  <p class="rpl-type-p rpl-type-weight-bold rpl-u-margin-t-2">Bobby Joe</p>
                </div>
                <div class="avatar-card"> 
                  <img class="avatar-img" src="../assets/images/avatar.jpeg" />
                  <p class="rpl-type-p rpl-type-weight-bold rpl-u-margin-t-2">Bobby Joe</p>
                </div>
                <div class="avatar-card"> 
                  <img class="avatar-img" src="../assets/images/avatar.jpeg" />
                  <p class="rpl-type-p rpl-type-weight-bold rpl-u-margin-t-2">Bobby Joe</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
  import { RplIcon, RplSearchBar } from "@dpc-sdp/ripple-ui-core/vue";
</script>


<style>
@media (min-width: 1024px) {
  .enrolment {
    min-height: 80vh;
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
