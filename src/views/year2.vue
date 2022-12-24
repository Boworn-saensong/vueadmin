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
                <ul class="nav nav-treeview" @click="toDashboard">
                  <li class="nav-item">
                    <a class="nav-link active">
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
                <h1 class="m-0 text-dark float-sm-left">ตารางเรียนปี2</h1>
              </div>
              <!-- /.col -->
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right" @click="toDashboard">
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
              <div class="col-lg-4 col-6">
                <!-- small box -->
                <div class="small-box bg-info" @click="$router.push('/year1')">
                  <div class="inner">
                    <h3>ปี1</h3>
                  </div>
                  <!-- <div class="icon">
                      <i class="ion ion-bag"></i>
                    </div> -->
                  <!-- <img src="" alt=""> -->
                </div>
              </div>

              <!-- ./col -->
              <div class="col-lg-4 col-6">
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
              <div class="col-lg-4 col-6">
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
              <section class="col-lg-6 connectedSortable">
                <!-- Custom tabs (Charts with tabs)-->
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">
                      <h2>ตารางเรียนปี2เทอม1</h2>
                    </h3>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body" style="height: 16rem">
                    <img src="../assets/y2t1.png" width="100%" height="100%" />
                  </div>
                  <!-- /.card-body -->
                </div>
                <!-- /.card -->
              </section>
              <section class="col-lg-6 connectedSortable">
                <!-- Custom tabs (Charts with tabs)-->
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">
                      <h2>ตารางเรียนปี2เทอม2</h2>
                    </h3>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body" style="height: 16rem">
                    <img src="../assets/y2t2.png" width="100%" height="100%" />
                  </div>
                  <!-- /.card-body -->
                </div>
                <!-- /.card -->
              </section>
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
  name: "YearTwo",
  methods: {
    toDashboard() {
      window.location.href = "/";
    },
  },
};
</script>
