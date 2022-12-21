#!/usr/bin/node

const priorityIndex = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const itemPriority = (itemType) => priorityIndex.indexOf(itemType) + 1

const input = `LdHVLDLDdHdtLMhcqCqGWcWg
ZZQZSZnnJrQrJQJbfzfnWGWPWMcChMMPcqMnhFcF
ZrzpWzfbpQpWbzvZWZpdtVtDNmRHNVptNDHt
gzCjffWZCtCfZZVdqVSqJdvJndSt
hMHLcmGLMLhHmsRMsSvsQSqrsrlJTTdV
NPNGRGHGHNLczNzzZFWSFFCC
VSBpcvNNbNWWSfGRwtJnRtrzzGzGGn
jZlhTlQLHFLLZbwrzQQsttDtbs
hmmPFlhLmhLMgFMFLbMBBgcNVcfNCcfSVSSNBq
jRDSzjCjjMRMrHzMRCDHMDjBnlQbbnQwLwrNLPwnTPQrlc
sZBqdZqsWgFBpgppGJqllPllwnbQwTwsswQPwN
gJgtJJBtqJqWBGzjRCHDDzRmDtVV
GRBWbbWnGNhbwSsfPfmrlslWsS
HLVCgCLpMgcLVDcDCgmlvstSlsstPtSSSlscvl
LzQDQzMMzJzFQVDJgCzJHJZRZBNbqGFhNFwBGhbhBhBm
JNsHhdPZSdZJjSHzzNwvwGgBFmBmvptJbFvm
WrDrwqqqQWVMCvMvGbGbbFFbFp
rqqLncqnlCncwQWCwWlLfSZPsZddfzzNNdhdPlZz
rwfrwHqSdRcgwdZrDcrqDDdgNzjNjPzPJNJPtbNPbGsHNGHv
hllLMTLLQMCzJssPsTvtFG
QtQnpWVVMVWnVQpRZSSwZDggrcSq
FDlqPMBdmbqMrdDqqFdFDwjHZChHHZfZWZNBsZjhfhHf
VQJVgncpTQRJfsssGhsNWC
NtpLLSpcLVRzzRRtpgVcLgglMwwlPlzdmDlFmFPDmqqwlF
PqwwSqNWPqwSWqjNBwpTPpffhJfZfstRtZJRRdJsdR
VFLFzQVgVnDVjhdJHsvhZjfg
VVFVDDnmnzLFCzVmznFzrFlrjSCPNMBCSGSGwwwGBjPNWPwC
zzbCGrfgbzfzCtvqdjSrvSjnvS
cNVTLnJZRNNmQmhJNptvBlBtVjlljqqldtlB
ZhpcJHLQhRcLZLmNQJzfFwDzzgHPFngDPPnP
ttntdMMBZzbZZtjPfwjwTwBvvVmh
llSllRRNsGCrCDTPfgVgTfgvsjPH
CFclcCWGrJNDSnnWMbQTnWtLQd
bccfdSfwFsswcbbdJFGQVGnCJLnBLnDnQLDj
ThvHZNhZmqNWMNqvDVjcjjBQVhQBBVLB
vWMZZNRmNMWqtWqmqHclfFgdlwRwrzzSfwbFRd
WNzRWWZNmtNZnssNRPtCJFQJCffVJVffCvlF
cBqBLgHHBcgqBbCJjrvrVQJfsHlr
DhDShwchBSbdwBsqgGcbgTTRmzdNWmMRMmTdNpTMmW
FHWZDbbPZDFHgGGPdPbJNLpJSlNjcjSphcJjFN
ZCCrBBRwwCjcNwcljppN
CmTTsrMfBCRsTMnnCRTmVZbgdbdGfWHPDVvdbbPV
cgSNBScMgjBBPtBCNLVvVVvhhJJhvsMhVfWq
TFlDrHPZHTTFmwTQHZDZTrqvvzqlJppVJvpffhqqVfJp
DbPwrTZDQDRQQwQZrDrbbQwRRnNSBtCjtcNGjSgSLjLccC
pdcVCpdZnZgcZgdcDWBDNcNwvBWJwc
RRmHspRmmQfLwwJJbFBFFJNR
rGlpfrQrqGhGqdGP
THhNsHhdFjcDthDcjDhLBqWcLLQQJvvBbvBJbl
GfrCSZGCzfVMrVCCzGVfSMQBBFlJlJBFFZqvWBqbbQWl
rSrFwCwzMMzRfGrGMwPfGCVdgHDttthNPssHjmNNdDjgdD
shmhggDsZCZWBDmsQTcTqrLPTbNbwQQrrN
lzpFVfdjfFFGnVVHpjJGJVlprNMPNtPctTNwLtcTbwctwTnN
jVFfzVlFSpzpFCshWmgSRgmBRb
zZGFNPmdPdszdWddGWZlpLMLpbQbLDpblzQbtv
wTwgwSSCHhhCSghJbpcpDglbbQbMVMpV
BHnBRrJCHmRNfGDmfm
CffgvfCRGngRrvGvgdnRVpPQQPSqbVZZDPDVPzFSSQ
cMlWJTMlcTLTLtHHJlpqDLwqSzSSDDqDZDDS
tmHTtlMmWpmsMJsCRdCNsrRGfrnffN
lNrzNHNwzZlHmwNBpMqqnqGDZSpMTGnb
ddjgFjjsRvGvQhQvvFjqbVTFpbVpFDJSbJVpTS
cjsQhsjvRvGcgNtzczmtmwCCcr
NJMJvBmBJPtMtRDnDDwDMFFWDWHG
hZsrzshpSdjZZqSSfgpDwnwFnGCCLHDbjnGCWG
zfgSpScsrdpmllttGvJGcm
GLsnLVLZGZmcGVpgZLmTjTsDDTlDTHPPHWlHwD
dNJhCCdtNJSvdDzwPlvTlQ
BCbBrPPfRMfMJSffrMCMChrSqVcmLLFpqLFFcggLVnqgmbgc
hMdjMndZLRnRnjclszLclQlzGwcr
FPCCSCSpCwStJVGzsPQGslGzPbsQ
TSSJTtfTFTwtmTFFVFDTWRvdgndjjRhnjnvHjdfR
ZwgsnsWsWvWQHqJhGhJVCJHhCJ
cdjlMWRRMhJLCpLL
jjSRmRmNRNWBmdmcWjlDWFPswsPtnZQsnBsnZvvTTnvT
vvbjLTPbQzrQQjpLzLbflfjfRDDsDlRfgDnnVD
ZGCtHHFGzFHhMlCnDqwlgggsqf
FJHMhHZGmNHtJhMhBJZZtZdrbSbSzbmWLLQrQTbPdbrS
ZClGVCvLZzCLBVbdGGzVVBvVrqQMDWMHrgmgQLWrWmTgqqHH
tNpNspcQPfHmqfgHmHHg
nNttnwPRjFtPcccsFptPlllQGlQZbvGzVVVFzhCd
lflmVWpDVsMmmVPlHVbbGSSbGnSHJcncnLZn
NvTFzNwzTQvhFGSZnvgrbgJCgr
jtRwTQFzjBNGGQQBdDsDqqlsVqRflMlPsP
rCSJPCrBwwMdBJRCrwMTGWTWNbcjGZNGGZTb
qzgqfgFghsHzfgHgmmfWGNGGWcNNFClbWlcCNW
DqsnzsHLhddBDwCRJR
sZpHjZrVQmcrbhbthzhFHzhH
QDPMDMndqqQGqQfCDDbhFtzzLtbWzlBLLPBW
TDMDqfGnJSnfnfvgjsjNgJvsjVQv
bDZQbZHdQQggZfttJjGnplSnldsG
FTrFCvWBWzTNSPNvRBGJsGjpsJjstmCLtjCt
rhBvzRVRBBSVHDHcHMHq
FSbSNZbZbzGzGGbNzGgcZPwlDPvlNmLLLwLLlLvvvl
pqnqpVCrpshqmChsQnnRpRCldDHvDHLjDlvPwddlwPtwDV
rRTCnnpCWCChTrWsrBTfbcFFmFSSmfBBGg
QdhdWDsHhHWzPrLPSCPGvs
gpZZmNmtjZwpBZBZgSnvFcGPrrvmncnvmC
RVVRjZJfJVfVBZVtBNBVppZVDqMHhqTbMGlWHQhhWldRMHWd
BPWQrRRNNMhrHhLqqGgjDJjH
TzVmmpmtCNwscTzszcNzDCfCHJqDfGjDJJgfGCDq
wdwmspTsVdlTcpbmVMPWBbBWRPNnFnBWMr
VZTnVnsgrjjsqPzPwWgWPghz
mcFdQGPMBdMSBdWbhRzzWqwLwcWt
GQPBvpfvNvFPBvTnfjnZDHDDjsrr
CZssCNFJBmBNFmFBNwBFCJFTtthGrrSThtSgSRtSfRTGtRrg
LDpDbnjjDGpggGrvGg
PLMWnWQgbQWnWbnbjqDbszHwwzwmNsFZMBmwJFZF
hQSjFLhFLLMSSFgdWTMdGgNbNbWv
JmPlltJBJqmzpbrrwTwrvvGqww
HBzztRBRplzlmHmRmmsplRJZcfFcLFfHSLjSZTcfVVcLVH
nBSQMnVQqJBGnfVfDgCrjbVbtC
FNcPPHdTdhmBdHBvwlZjbClClfcZgjclgj
vFdHWhTLHvnBRRqBsWSR
TRsNNTTHRRZRRsRzJQddSpJLcQdpjs
DMVPVVGmMGWMGtMgGtDlmMWwLLLpJfSfpjzpdQddLSmSSJdc
tVMgGMDwMgMWDBWMttjRBZNnvNCNZrZZRbZNvZ
wlJPVMJPPBShSlhgfTvgNNzzgNMCTg
FLtRnDDSrvdNdrng
FcSmpFZFFmmjWqPWJbmhGqqm
hlBqqTlSfvNhpbfb
fRVsVDDRtnRVfbDNCCNCNQGwNZ
nrrRPPnHzntRrPsRVrtJVBMjlzWfFWdMjjWMqdBBlT
zDNcnRsNNfRFFNNzRzLbRWgMZMMZcdhcBdMrBpZmmZ
PVHHVlPDGPPtjDmmdrrGBBMpWGWd
VVqTTlQtDCqFNzsnbLbCSJ
ndSGSZZGwSZTBdwnwdwmWCzPQCQLffZzRgMZRggMzf
mvqVmqrmcDqllNNtbcNcMCQMRCMCCMQfHLgvRgMg
FhNNcrrVljFcqmTJhwnsmGdJsT
wlmLmZLwzvVmVWVmQWzZSFJFDSqFHSSFJHhDqZ
RsgpMNcMdRgjDcRFqCSrHSHBCFJr
jdncssDNPsbmmwvvlPLw
wQGHMrHGgwgVTQrrMGgGQrTtWzzPJhsfhZztWssQWbZCWh
FjvBFSqqDbljFvSbnvFltszfWPPfWzJZBCsPtJft
qLlDbpjFRbpdGTgLGLGTTV
hrVJsBrpwbsMZtTLlwnqtqdc
QDDmHWmffHCQWHjRQjCWczTTjtlzdldqVtTnTqLt
HmfGfRNWfNWmQCRsgbsMFMhMGvpBVs
CRzzVCZhvGQqNmcWrgpgwQFSmF
BJsttjDtjbdLMHHsBTqBbBHMrprDSrFnFnSgrnnrpDSmWWnw
TbMBMPPdLTbHTjHMtPzZGvzlvqCPGNlNVRVP
QcmcrCVcdTCGRRLT
zzgWFWVBTSWLPdMP
JbhnBVzzfVhgztVDvqcqHwncZHNqnsnccQ
JJVBFfJjNNNsJTwVfZJNffFRpRzRzRptRWtCtSSHWsWzCD
rmrnhgclhQGcGnhrPjqgGMHbWRHRbRCWbzRbMSSpHWCD
mhhjQGGjQgggqnmQnmghdQdJFZBNvZBBLNTvvTNNTLfZ
DrBgwMCMRvMrvDgPCzdpdNtzqqlHNNtp
jWSSZGgfGjcLfdNjFzqqFFzzFF
nGZhTmZLLZhGPVVTgQgMRrrb
ppqZvppdJmSLHdSfZRrrtbscgRVVgwVrHt
hFFFzQPhNWzNhnhGVggrcbwVgBnvbwgR
CNQWFMzWWhCflpjvZJMJdj
pfpfmQMWmcBVfMBBmpfVQMbDGGNPDTcSNTTsSNPCCNhC
ZZrZwvvzZrvZlZlwhwswhNSsgbDssC
ttvdtzRzFDqRJWLVLWJJpQ
CZZPTQPTPTJhTQTrHCBbvtLbbbRWtjbDvb
cGfsVSVcLdSgSwBWRNNGwRNRbD
spSffnccsgcdnnJJQlZZqJLhpMJh
TwGGdWwdddtTsbzPzbbnTLnPLP
gqNSMvtvcSDLLfnMnnPzFM
NvDNDqtvRcjQVGZZGZZhwpQB
jtgFmnqjqttQpsphzNllblzlNH
GRMRDMGCVCHzSCbSbNNl
LMTJRTGRLBJBwLRRHmBFQPvqmPBvtgtc
jDjjwRDpPqqsMsDLJbJzVB
lMNMNddvMltNfFVWbVVWJrrVLfgL
NQQtmtFGFlGZPZcMmmcjjn
CgCNjvSCgSQQzVZNWVnTBPTcsTVBnpPs
bFbbLfbfdRBFhLwqFmblBJfRHtWcttcttlDpspcPWDcDptPn
mdbFhfJrmJwfbmmFFFvBZCNCzMGrNjMQjCCZ
TPDNHHSTNNmRfTrRMZSqwwttdbBvBMth
VVnnFGgnQcBvMqvnhNBN
GLzjjzGscssJGJCHljmfmTWPTCDN
BZZNcMQjBNjNtDJgstjgtwqGRQfhGhSvPfThfqvPhfhf
CCndrnmnnWbrnHrFbWbpbbVmGGPqLfTGhvGSPhqRLRdfSGsf
bFssVbbblFHzrmFlMNMtcNgDtJDzZgtw
smjMtSqQQSjtSfmDVVFHFhnHBHmbNPPH
TgvCCJcZdwdgNvbHvPbbvBNq
JLqRWTgLqJLCJcclgCJdWjfsSSpsfRrsQjDtspptQQ
hNwztzgzJnnNTVFwNTNhwVhZlrpLMLZZlpZlQndLPLpQLZ
vRDvqSSqjbqSWDvjbvBdLWspPLddZPQQLMllLp
SfGfRmSGCSfBfjTcNFgzwMFJzwgm
lhVBhZjjPHbThwFGrNrdvNNwFV
DRrDLfMLSgpCdCJcfmcJCm
LQtnprtqSRtZjHzTthlb
GrGsqfbtsWGWWntnrrwWWWGSSDSMDcSSSwTDzPzJSJzPcT
lmQhhVCgmffCNgmNNmCmBNRRPvDzDMhJvSSDJzzcTzvvPvMT
VBllNBpfQgQmpLBpRBtnqWLFFnZZWWGrZrjq
NRJdngMVwfgnwJtvlblcWLlLDHfccDbW
PFJzBmhmjPFpJrFqLcQHLlHGDlHDQbGz
ShJZJmPFpwdMvCCZRd
WQDqSVWqpBCsPqPWWNscfrHfhrhrHhGFGs
MmLRmLTjmTzTzlhGHfprhvfFhHfT
mLZLRdgMRjtdddmdgwmtMwQSCPbnDSSCqBDwpWPQqn
rNHwMMGDrggWwsvWMPMWWwjbCqjCBlZqvfjBqCJhfffj
FbtFmRTpzBBZqCClpJ
ztbzFtnzVNnNNPPDGD
PLPFcwdLdFcbgdfSwFtWhGWGRMWMJMGCblJR
qTpszVVjRlCHtWCT
qzvrDqQrqznzggFZwFwQScdW
LWLjLNjNjTwlwLZVcBVcVVZcBVQcZZ
JhGhFdmBRdGGDnQtbPvVVdnccS
zDrrFGFFRgRHmDNWTpjTBNTHWNjW
fwfBVLhmwfhHsgBstWCWQnDQnlldWW
hZvFTNJrZjZbFvNvttqWWDtcWqCtFDWn
rbjjrjpRzRzgBLzwLgmzLh
ZqqqWVzdSPnwBJBfwJfZTs
FHGgjRLMJFsJTsBw
DHRcDgHvLhDWPSCzwqnq
LZGZLLRLZpRQBtPTjTffrHljjmsB
wNVVwcCgNCCScwggmjHjTPmQPsTHmlSs
gbbwbqhNCQcbqqVchWhtRZDJWJDtZLWL
CmTmvvmvzCCCgzzVQmTQvTjjGRGShwSHwRrRSSSSDNHSFN
PqZqWdqlplsqBJMMsMMnGRJRbbNwNhrrhShGShFD
fBWBWdZppqpqDMBdlfcTCTLtLtLCQfQvcmgv
pntdtdHHWHqnptGpqHqNgMQwPPPnZMZZZZcfgc
LFmLSVBRTSBBRrffTQgMfQMtJZQT
bmRCSSSjRCtSrRChjqqGqpppGhqDGp
dGGhhfNfgRTGLcpL
BmCCwQMQqmQrBCBJLpbVTFbHcgcbLTMc
JrpqJJmqqqqmzqqwmwNlzfvltDPltfshlhNN
VCCbMJfJlgRCnNGVNnvFvVBF
STsgcZdghZsqSttBnsGnBtBtHt
qDcjgDphjhSghZTQgCJWQWWfwfRzWlwJzJ
JHMVMvmvRcdbmrRHQBBGjcjfFQfChSfj
NltNtZllgZtgtnpnqNWpgCrCBQzBGzFhQrGSSBCzWh
pDrwnqLlvDVmPbss
dbrpbSrwBjswsSjCwqllLqFtqLcrGqqFtF
RvfJDQnRpHvvQfRvvQRJFDqzcWltFFlzcLttWltW
ZpnRVZHmvHnTnPZZPHfHmVwdjVghwgVSBgdBBCwgdC
WRCBGWvNgHnMcFwnpC
ltlstrjlJNlfrZZqDJtNLsHnmwwpcHphhFPMFjwhmnFp
TStJssLstJLtqTsNgvvSBNzzvWvGRz
VBjdWdGcqWdBVCFRmHwfCRRV
DLzNpqbDzDNbrJvltMLJLRRmtRFTSRmTmFwfRHRTFf
zvvJNLgNqGcnjgnP
JjdnFfbdbdQMbQzjtRcwcCvbvBqRBCwt
LlNHlWGprPCVVBsVzqNR
hLmgTlrpPPHrLprHrTTGggHWzhZFSJDfhMdnjjZfFfdFMjFz
bDbwRpCSRgqqMfMf
HzzPcPnhzlhsQzHhHnTggBBqTQTgVQqBqjZW
tnsrFccnzsDvGpNGqNtq
GmPsPrsSlswNmcLzMvnpnmMpLBCf
glDTZRDqRTjRCvjvfBpfCzvp
DHlJVhJRDTbqZDqSNVrNwtVrQwSSGs
nNnDwqDwFVgDwDnCgLnLpCVWdBMRpsPdMPPjRHRHHRdBWj
tQtfTtJtJmlTQrTtTlhfzrmdHzMMRMsBPPddjddBPPdWsB
bbhtQTfTTsmmbStnqGFGNDbFDgFVnw
dsVpDPBMHVdHpplpvdHjRjmmjRTMTFFrrTTFQq
LzzWZLGCzCWNjfmRfBhmQjZq
zSSSwJwSBzNtzLBbwbSGLzWVvcvpHdssDllVJgVHVcdDPv
RWfQBDTBLQWpDLNRZjZwHHddjHNhZdtv
ScCCzSszFzJccPHHvmjHvjhpmHsj
FPclgFVCbcngVgnpWQqqRfLBDBrR
cRLLVwcsctwmbVcszztwtRMvNrCpTggqFrTvvhCVpghBqh
PdSDGdnZQfGDfDjWjWWgvCqFhpqvpNZgCTTvrp
dGnDHWnSQdJPDSFLLcJmRzzLLLRRcl
lCSqlcCcBqBCCwGwnNWnnFwBHF
WMZLMPbPhQddRbMpbbLbRLLHDFgjFGDmFNZgNnDGNHGGjD
dTVPPQbPbMdQMzvVrWvczrCJqv
vzscdHcHZzHzCCHlQTTTCcslMGPStmSlpDDSSSgSPDNBmNtl
FWVMFhFMMqWhFVFbDBDDhpmpGtPSDpGG
fRLbFfwWWLnVjMdzzQHQJnnvQs
SmPdRbWZdSqqzSPmbdWFFQgcQnvncgQGQMMT
BfBLmVNjprVVNlVBrpBlHpNrgQFHGCGgvTQTMGFFgMCvgQcQ
BjjJfVLBfNffJbZDqtDsdzzm
NLgtLsSggjqgqpLLDjsjmcJfvpmFmmJmvPpwhBJB
lMnlZMtdCMrRRnRbTddWbVwcmPfFmhJwPfwJmvfwFvPl
MnRrnGWRbgQqtNGDjt
dSdrTbTtLJCcttcFVw
PhsgQQGPZshvpQZGgsrBllVFlHVpFllJJrFH
gqsGPgMZhgvQbzrzTfSzMTLf
pqbDdQWqCgBfbbfFfB
vtjnmzLcmhBdzTFgTsRP
LZGmjvJGGctnLtvcchSjmhcLqNHCwVdQZwDwWDNpCwqHdDwQ
wlMWSSHWShSMbDSwVhCrNjJmcrDmGRRCGCjN
FHZdHftFFQnqsQqsQttjvGrJccmdGGcrNdRNmG
pHpzPpQHpsPzPlzlbSgSSMLwzh
fCQDLlDQTSjbHDqH
ZhrsrZZZhcclwNswGGwbwF
rcWhlhlpMJpMZmgtBCzCttCCRfdp
zLnCMLNTvtGNpNvNjhRHgZhHvZdZHdjD
fSsWWqScTfJJqfJFFJwswhdHhhhdhDdjbjZbhhDj
WsWmfcqBWfTfsrntrLmplCLttm
ljssbqMMPbHPlsbcWZNLLsWJWRFvvZfW
SzgggDDwTzrQmDQgdSSWvdJLFGffRvZG
zCzCDCrznnTTmCbbpvlPHtCPtb
TZSwNPpcgpNPbwbhhbwrwJqh
BlCDtvvgLWGCLffGfLzLrMqnnbDDHbmnnnJrhnVJ
lzBjdCjCGCjfGjjLGBGGjlCSsRppcdpRNdRSPQcRPQZTgT
TsFTrvGmZGfvZfZFzNNZrhClmRcBgCMwQwQPCPMPRP
bpnnVVJtSDgRBwbQRwlR
jpSnqLpqDJDJLDjWDWLWvvzfZZvqvNsGTHGGFfZl
bzbzznqfCpzvhCSMfbCbpCFhtHGHHJdtHJGhFsmshJJG
DLWRLjRrmNPQjZZlQPsFGFggVcWcFddggdsg
rjrZPwwDRlLLBjQlRRlPDpmbqzpqnnCSCfTMwMqSvC
FmcGcjLRPjQwQjMQrwHQ
btJzJbVNdBJJtzTdGBbdBztGrQhhQWhMwHrhrHSHgHQfhMVS
JJDpdDTtCtzNptnTJBznnvLCCvcFqsRqFcvZclLGRR`

const ELVES_PER_GROUP = 3
const inputs = input.split("\n")
const numberOfInputs = inputs.length;

const numberOfGroups = numberOfInputs / ELVES_PER_GROUP;

const groups = new Array(numberOfGroups);

let groupNumber = -1;
for (var i = 0; i < inputs.length; i++) {
  const value = i % ELVES_PER_GROUP;
  if (value === 0) {
    groupNumber += 1
  }

  const group = groups[groupNumber] || []
  const contents = inputs[i];
  group.push(contents);
  groups[groupNumber] = group;
}

const isItemTypeInSack = (itemType, sack) => sack.indexOf(itemType) > -1;

const badgePrioritySum = groups
  .map((group) => {
    const [sackA, sackB, sackC] = group;
    for (var i = 0; i < sackA.length; i++) {
      const itemType = sackA[i];
      const isInSackB = isItemTypeInSack(itemType, sackB);
      const isInSackC = isItemTypeInSack(itemType, sackC);

      if (isInSackB && isInSackC) {
        return itemPriority(itemType);
      }
    }

    return null;
  })
  .filter(Boolean)
  .reduce((total, priority) => total + priority, 0)

console.log("Badge priority is at", badgePrioritySum);

const priorityByIndex = []

for (var i = 0; i < inputs.length; i++) {
  const contents = inputs[i];
  const contentsLength = contents.length
  const compartmentLength = contents.length / 2

  const compartmentAContents = contents.slice(0, compartmentLength)
  const compartmentBContents = contents.slice(compartmentLength, contentsLength)

  for (var j = 0; j < compartmentAContents.length; j++) {
    const itemType = compartmentAContents[j];
    
    if (compartmentBContents.indexOf(itemType) > -1) {
      priorityByIndex.push(itemPriority(itemType));
      break;
    } 
  }
}

const sumOfPriorityItems = priorityByIndex.reduce((total, priorityValue) => total + priorityValue, 0)
console.log("The sum of priority items is:", sumOfPriorityItems)
