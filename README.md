# LearningReactNative
learning react-native with O'reilly 'Learning React Native - Building Native Mobile Apps with JavaScript'

# 相關心得
## Chapter 3
1. image source 直接 require 來源即可：source={require('../images/flowers.png')}
2. 因為 ios 安全性考量，所有 http 相關的網址需要加入到 Info.plist 的 NSExceptionDomains 節點裡面，
   例如：
       <key>samples.openweathermap.org</key>
        <dict>
            <key>NSExceptionAllowsInsecureHTTPLoads</key>
            <true/>
        </dict>
3. Info.plist 檔案變更之後，需要使用 XCode 進行編譯之後，模擬器上面的 App 才會正確套用。