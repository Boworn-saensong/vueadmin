<template>
  <div>
    <div class="wrapper">
      <!-- Main Sidebar Container -->
      <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <a href="#" class="brand-link">
          <!-- <img
            src="assets/dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            class="brand-image img-circle elevation-3"
            style="opacity: 0.8"
          /> -->
          <span class="brand-text font-weight-light">AdminBom</span>
        </a>

        <!-- Sidebar -->
        <div class="sidebar">
          <!-- Sidebar user panel (optional) -->
          <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
              <img
                src="assets/dist/img/profile.jpg"
                class="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div class="info">
              <a href="#" class="d-block">Bowornpod Saensong</a>
            </div>
          </div>

          <!-- Sidebar Menu -->
          <nav class="mt-2">
            <ul
              class="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <!-- Add icons to the links using the .nav-icon class
                      with font-awesome or any other icon font library -->
              <li class="nav-item has-treeview menu-open">
                <a href="#" class="nav-link active">
                  <i class="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Dashboard
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="#" class="nav-link active">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Dashboard v1</p>
                    </a>
                  </li>
                </ul>

                <ul class="nav nav-treeview" @click="$router.push('/page2')">
                  <li class="nav-item">
                    <a class="nav-link active">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Dashboard v2</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
      </aside>

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0 text-dark float-sm-left">ตารางเรียน</h1>
              </div>
              <!-- /.col -->
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content">
          <div class="container-fluid">
            <!-- Small boxes (Stat box) -->
            <div class="row">
              <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-info" @click="$router.push('/year1')">
                  <div class="inner">
                    <h3>ปี1</h3>
                  </div>
                  <!-- <div class="icon">
                    <i class="ion ion-bag"></i>
                     </div> -->
                </div>
              </div>

              <!-- ./col -->
              <div class="col-lg-3 col-6">
                <!-- small box -->
                <div
                  class="small-box bg-success"
                  @click="$router.push('/year2')"
                >
                  <div class="inner">
                    <h3>ปี2</h3>
                  </div>
                  <!-- <div class="icon" style="padding-button: 5px">
                    <i class="ion ion-stats-bars"></i>
                  </div> -->
                </div>
              </div>

              <!-- ./col -->
              <div class="col-lg-3 col-6">
                <!-- small box -->
                <div
                  class="small-box bg-warning"
                  @click="$router.push('/year3')"
                >
                  <div class="inner">
                    <h3>ปี3</h3>
                  </div>
                  <!-- <div class="icon">
                    <i class="ion ion-person-add"></i>
                  </div> -->
                </div>
              </div>

              <!-- ./col -->
              <div class="col-lg-3 col-6">
                <!-- small box -->
                <div
                  class="small-box bg-danger"
                  @click="$router.push('/year4')"
                >
                  <div class="inner">
                    <h3>ปี4</h3>
                  </div>
                  <!-- <div class="icon">
                    <i class="ion ion-pie-graph"></i>
                  </div> -->
                </div>
              </div>
              <!-- ./col -->
            </div>
            <!-- /.row -->
            <!-- Main row -->
            <div class="row">
              <!-- Left col -->
              <section class="col-lg-7 connectedSortable">
                <!-- Custom tabs (Charts with tabs)-->
                <div class="card" style="height: 400px">
                  <div class="card-header">
                    <h3 class="card-title">
                      <h2>กราฟเกรด</h2>
                    </h3>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body">
                    <div class="tab-content p-0">
                      <div
                        class="chart tab-pane active"
                        id="revenue-chart"
                        style="position: relative; height: 300px"
                      >
                        <canvas id="revenue-chart-canvas" ref="graph"></canvas>
                      </div>
                      <div
                        class="chart tab-pane"
                        id="sales-chart"
                        style="position: relative; height: 300px"
                      >
                        <canvas
                          id="sales-chart-canvas"
                          height="300"
                          style="height: 300px"
                        ></canvas>
                      </div>
                    </div>
                  </div>
                  <!-- /.card-body -->
                </div>

                <!-- /.card -->
              </section>
              <!-- /.Left col -->
              <!-- right col (We are only adding the ID to make the widgets sortable)-->
              <section class="col-lg-5 connectedSortable">
                <!-- Map card -->
                <div class="card bg-gradient-primary" style="height: 400px">
                  <div class="card-header border-0">
                    <h3 class="card-title">
                      <i class="fas fa-map-marker-alt mr-1"></i>
                      แผนที่บ้าน
                    </h3>
                    <!-- card tools -->
                    <div class="card-tools">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm daterange"
                        data-toggle="tooltip"
                        title="Date range"
                      >
                        <i class="far fa-calendar-alt"></i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        data-card-widget="collapse"
                        data-toggle="tooltip"
                        title="Collapse"
                      >
                        <i class="fas fa-minus"></i>
                      </button>
                    </div>
                    <!-- /.card-tools -->
                  </div>
                  <div class="card-body">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d471.15355527910964!2d100.9374409747906!3d19.14147515071828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sth!2sth!4v1671727747904!5m2!1sth!2sth"
                      width="100%"
                      height="100%"
                      style="border: 0"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <!-- <div id="world-map" style="height: 250px; width: 100%;"></div> -->
                  </div>
                  <!-- /.card-body-->
                  <div class="card-footer bg-transparent">
                    <div class="row">
                      <div class="col-4 text-center">
                        <div id="sparkline-1"></div>
                        <div class="text-white">191 ม.6</div>
                      </div>
                      <!-- ./col -->
                      <div class="col-4 text-center">
                        <div id="sparkline-2"></div>
                        <div class="text-white">ต.ป่ากลาง</div>
                      </div>
                      <!-- ./col -->
                      <div class="col-4 text-center">
                        <div id="sparkline-3"></div>
                        <div class="text-white">อ.ปัว จ.น่าน</div>
                      </div>
                      <!-- ./col -->
                    </div>
                    <!-- /.row -->
                  </div>
                </div>
                <!-- /.card -->
              </section>
              <!-- right col -->
            </div>
            <!-- /.row (main row) -->
          </div>
          <!-- /.container-fluid -->
        </section>
        <!-- /.content -->
      </div>
      <!-- /.content-wrapper -->
      <footer class="main-footer">
        <strong>Copyright &copy; 2020 <a href="#">Your Site</a>.</strong>
        All rights reserved.
        <div class="float-right d-none d-sm-inline-block">
          <b>Version</b> 0.0.0
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {},
};
</script>
