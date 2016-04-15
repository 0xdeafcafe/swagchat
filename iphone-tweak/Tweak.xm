#include <includes/SCApiClient.h>

%hook SCAPIClient
-(id)initWithBaseURL:(id)arg1 {
	%orig(arg1);
	
	NSMutableDictionary *settings = [NSMutableDictionary dictionaryWithContentsOfFile:@"/var/mobile/Library/Preferences/com.0xdeafcafe.swagchatsettings.plist"];
	BOOL enableTweak = [[settings objectForKey:@"enableTweak"] boolValue];
	NSString *customServerUrl = [settings objectForKey:@"customServerUrl"];
	
	if (enableTweak) {
		self.defaultBaseURL = [NSURL URLWithString: customServerUrl];
	}
	return self;
}
%end
