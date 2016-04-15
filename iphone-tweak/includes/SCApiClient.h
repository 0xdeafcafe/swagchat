@interface SCAPIClient

+ (id)defaultUrl;
@property(retain, nonatomic) NSURL *defaultBaseURL; // @synthesize defaultBaseURL=_defaultBaseURL;
- (id)initWithBaseURL:(id)arg1;

@end
