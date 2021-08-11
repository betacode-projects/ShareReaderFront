<template>
  <div>
    <header id="header" class="header">
        <div class="header-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="tab-wrap">
                            <input id="TAB-01" type="radio" name="TAB" class="tab-switch" checked="checked" /><label class="tab-label" for="TAB-01">QRコードをスキャン</label>
                            <div class="tab-content">
                                <p class="p-large" style="text-align: center;">受信者の「QRコード」を読み取ります。</p>
                                  <QrcodeReader/>
                                <div id="reader-data" style="text-align: center; margin-top: 20px; word-break: break-all;"></div>
                            </div>
                        </div>
                    </div> <!-- end of col -->
                    <div class="col-lg-6" style="display:none">
                        <div class="tab-wrap">
                            <input id="TAB-04" type="radio" name="TAB1" class="tab-switch" checked="checked" /><label class="tab-label" for="TAB-04">ファイル情報</label>
                            <div class="tab-content">
                                <table class="tbl-r02">
                                    <tr>
                                      <th>ファイル名</th>
                                      <td id="file_name"></td>
                                    </tr>
                                    <tr>
                                      <th>ファイルサイズ</th>
                                      <td id="file_size"></td>
                                    </tr>
                                    <tr>
                                      <th>アップロード日時</th>
                                      <td id="upload_date"></td>
                                    </tr>
                                    <tr>
                                      <th>MIMEデータ</th>
                                      <td id="file_mime"></td>
                                    </tr>
                                    <tr>
                                      <th>ハッシュ値 (SHA256)</th>
                                      <td id="file_hash"></td>
                                    </tr>
                                    <tr>
                                      <th>ダウンロード数</th>
                                      <td id="file_download"></td>
                                    </tr>
                                    <tr class="last">
                                      <th>ファイル操作</th>
                                      <td style="text-align: center;">
                                          <button id="renameFile" type="button" class="btn btn-primary" style="margin: 10px;">ファイル名変更</button>
                                          <button id="clearFile" type="button" class="btn btn-danger" style="margin: 10px;">ファイルを削除</button>
                                      </td>
                                    </tr>
                                  </table>
                            </div>
                            <input id="TAB-05" type="radio" name="TAB1" class="tab-switch" /><label class="tab-label" for="TAB-05">デバイス統計</label>
                            <div class="tab-content">
                                <div class="chartbox">
                                    <canvas id="device_chart"></canvas>
                                </div>
                            </div>
                            <input id="TAB-06" type="radio" name="TAB1" class="tab-switch" /><label class="tab-label" for="TAB-06">ダウンロード推移</label>
                            <div class="tab-content">
                                <div class="chartbox">
                                    <canvas id="count_chart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div> <!-- end of col -->
                </div> <!-- end of row -->
            </div> <!-- end of container -->
        </div> <!-- end of header-content -->
      </header> <!-- end of header -->
    <!-- end of header -->
  </div>
</template>

<style scoped>
  @import "../../assets/css/fr.css";
  @import "../../assets/css/bootstrap.css";
  @import "../../assets/css/original.css";
  @import "../../assets/css/styles.css";
  @import "../../assets/css/style.css";
  @import "../../assets/css/main.css";
</style>
<script>
import QrcodeReader from './qrcodeReader'

export default {
  name: 'Dashboard',
  components: {
    QrcodeReader
  }
}

</script>
