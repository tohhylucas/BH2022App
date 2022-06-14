import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";
import * as DocumentPicker from "expo-document-picker";

const Stack = createStackNavigator();

// EMPLOYEES SECTION
function ProfileLoad() {
  const navigation = useNavigation();
  return (
    <View style={profileStyles.Profile}>
      <View style={profileStyles.Group904}>
        <View style={profileStyles.Component2}>
          <Text style={profileStyles.Txt695}>8:55</Text>
          <Image
            style={profileStyles.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-I26%3A178%3B14%3A9?alt=media&token=88c48548-d260-498a-8f25-ef5ad7ac15b2",
            }}
          />
          <Image
            style={profileStyles.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-I26%3A178%3B14%3A7?alt=media&token=c6e57c70-c9b6-4f0a-9624-ebd1bc0702a6",
            }}
          />
          <Image
            style={profileStyles.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-I26%3A178%3B14%3A8?alt=media&token=04ab74fa-bd34-4d1c-823d-bd5a12919da9",
            }}
          />
        </View>
        <View style={profileStyles.Group511}>
          <Text style={profileStyles.Txt442}>Welcome Back, Michael!</Text>
        </View>
        <View style={profileStyles.Group3310}>
          <View style={profileStyles.Group452}>
            <Image
              style={profileStyles.Ellipse1}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-26%3A243?alt=media&token=14b68ceb-46ac-48d4-b9c2-22b561f10387",
              }}
            />
            <View style={profileStyles.Group547}>
              <Text style={profileStyles.Txt895}>Name : Michael Wang</Text>
              <Text style={profileStyles.Txt895}>NRIC : SXXXX420W</Text>
              <Text style={profileStyles.Txt712}>
                Unit : 55 Infantry Brigade
              </Text>
              <Text style={profileStyles.Txt219}>
                ORNS Cycles : 3/3 LK 2/7 HK
              </Text>
            </View>
          </View>
        </View>
        <View style={profileStyles.Group743}>
          <Text style={profileStyles.Txt2810}>Your 2022 achievements</Text>
          <View style={profileStyles.Group547}>
            <View style={profileStyles.Group1058}>
              <Image
                style={profileStyles.CheckCircle}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-26%3A253?alt=media&token=5e2fd488-7061-43a5-b854-1fa22cadbe34",
                }}
              />
              <Text style={profileStyles.Txt2810}>IPPT</Text>
            </View>
            <View style={profileStyles.Group034}>
              <Image
                style={profileStyles.CheckCircle}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-26%3A259?alt=media&token=3b3aac0a-f503-4117-91b0-93027697b48f",
                }}
              />
              <Text style={profileStyles.Txt2810}>ATP</Text>
            </View>
            <View style={profileStyles.Group034}>
              <Image
                style={profileStyles.Vector3}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-26%3A252?alt=media&token=085b7689-cade-4006-bf5c-30534d610da2",
                }}
              />
              <Text style={profileStyles.Txt2810}>ICT</Text>
            </View>
            <View style={profileStyles.Group452}>
              <Image
                style={profileStyles.Vector3}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-26%3A262?alt=media&token=a6b07287-c86a-472e-a89c-0c228d05ba66",
                }}
              />
              <Text style={profileStyles.Txt2810}>Make Up Pay</Text>
            </View>
          </View>
        </View>
        <View style={profileStyles.Group309}>
          <Text style={profileStyles.Txt2810}>Manage IPPT</Text>
        </View>
        <View style={profileStyles.Group768}>
          <Text style={profileStyles.Txt869}>Manage ICT</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("ManageMakeUpPay")}
        >
          <View style={profileStyles.Group541}>
            <Text style={profileStyles.Txt2810}>Manage Make-Up Pay</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("ManageEmployees")}
        >
          <View style={profileStyles.Group699}>
            <Text style={profileStyles.Txt2810}>Manage Employees</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function ManageMakeUpPayLoad() {
  const navigation = useNavigation();
  return (
    <View style={ManageMakeUpPayStyle.ManageMakeUpPay}>
      <Text style={ManageMakeUpPayStyle.Txt758}>Application for Employees</Text>
      <View style={ManageMakeUpPayStyle.Group321}>
        <View style={ManageMakeUpPayStyle.Component2}>
          <Text style={ManageMakeUpPayStyle.Txt687}>8:55</Text>
          <Image
            style={ManageMakeUpPayStyle.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/upjbvx8bps-I26%3A286%3B14%3A9?alt=media&token=f48ed22b-52c6-4148-8a5d-e4fa7c398a7c",
            }}
          />
          <Image
            style={ManageMakeUpPayStyle.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/upjbvx8bps-I26%3A286%3B14%3A7?alt=media&token=fdd6d690-aa53-4611-b4de-330ad8904e11",
            }}
          />
          <Image
            style={ManageMakeUpPayStyle.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/upjbvx8bps-I26%3A286%3B14%3A8?alt=media&token=8a53c73d-60e6-4c23-ad21-131195f0d741",
            }}
          />
        </View>
        <View style={ManageMakeUpPayStyle.Rectangle9} />
        <Image
          style={ManageMakeUpPayStyle.Undraw_printing_invoices_5R4r1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/upjbvx8bps-26%3A377?alt=media&token=707299b4-ebed-4b09-9599-33d6b4ec7d51",
          }}
        />
        <Text style={ManageMakeUpPayStyle.multiple1}>
          Start New Application to begin your Make Up Pay claim. Resume
          Application to continue from where you previously left off.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("ClaimsOptions")}>
          <View style={ManageMakeUpPayStyle.Group54}>
            <Text style={ManageMakeUpPayStyle.Txt9109}>
              Start New Application
            </Text>
          </View>
        </TouchableOpacity>
        <View style={ManageMakeUpPayStyle.Group55}>
          <Text style={ManageMakeUpPayStyle.Txt9109}>Resume Application</Text>
        </View>
      </View>
    </View>
  );
}

function ClaimsOptionsLoad() {
  const navigation = useNavigation();
  return (
    <View style={ClaimsOptionsStyle.ClaimsOptions}>
      <View style={ClaimsOptionsStyle.Group035}>
        <View style={ClaimsOptionsStyle.Component4}>
          <Text style={ClaimsOptionsStyle.Txt945}>8:55</Text>
          <Image
            style={ClaimsOptionsStyle.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-I75%3A716%3B14%3A9?alt=media&token=1b5cf93e-d028-4f86-a968-4d4aaf9aa45a",
            }}
          />
          <Image
            style={ClaimsOptionsStyle.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-I75%3A716%3B14%3A7?alt=media&token=bfd4f10a-88df-49e1-9dd9-13e8970b2c4c",
            }}
          />
          <Image
            style={ClaimsOptionsStyle.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-I75%3A716%3B14%3A8?alt=media&token=fa7bc94e-f9d7-4f49-bb2e-c477e3bdf2cf",
            }}
          />
        </View>
        <View style={ClaimsOptionsStyle.Group823}>
          <Text style={ClaimsOptionsStyle.Txt533}>Claim Options</Text>
          <Image
            style={ClaimsOptionsStyle.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-71%3A537?alt=media&token=34f47283-7729-4659-90b8-8ab85ea18e1f",
            }}
          />
          <Image
            style={ClaimsOptionsStyle.Vector4}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-75%3A727?alt=media&token=8c5aea56-c617-4bd0-8766-9dacd250c53b",
            }}
          />
          <Image
            style={ClaimsOptionsStyle.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-75%3A729?alt=media&token=297cd230-7833-4aff-af2a-437932375a20",
            }}
          />
          <Image
            style={ClaimsOptionsStyle.Vector5}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-75%3A730?alt=media&token=f8c19176-6f2c-4a02-be29-117c29487a01",
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.popToTop())}
        >
          <View style={ClaimsOptionsStyle.Group52}>
            <Text style={ClaimsOptionsStyle.Txt732}>Delete application</Text>
          </View>
        </TouchableOpacity>
        <Text style={ClaimsOptionsStyle.Txt165}>
          Please select your claim option
        </Text>
        <View style={ClaimsOptionsStyle.Group784}>
          <Text style={ClaimsOptionsStyle.Txt494}>Income Tax</Text>
        </View>
        <View style={ClaimsOptionsStyle.Group932}>
          <Text style={ClaimsOptionsStyle.Txt737}>✓</Text>
          <Text style={ClaimsOptionsStyle.Txt494}>Average Income</Text>
        </View>
        <View style={ClaimsOptionsStyle.Group901}>
          <Text style={ClaimsOptionsStyle.Txt494}>Replacement</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Payslip")}>
          <View style={ClaimsOptionsStyle.Group417}>
            <Text style={ClaimsOptionsStyle.Txt428}>Save and Continue</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={ClaimsOptionsStyle.Group792}>
            <Text style={ClaimsOptionsStyle.Txt428}>Save and Go Back</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function PaySlipLoad() {
  const navigation = useNavigation();
  return (
    <View style={PayslipStyle.UploadPaySlip}>
      <View style={PayslipStyle.Group890}>
        <View style={PayslipStyle.Component2}>
          <Text style={PayslipStyle.Txt489}>8:55</Text>
          <Image
            style={PayslipStyle.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9lw0w0502pd-I26%3A488%3B14%3A9?alt=media&token=4a65099e-ce86-47f3-a207-5f2e744e2946",
            }}
          />
          <Image
            style={PayslipStyle.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9lw0w0502pd-I26%3A488%3B14%3A7?alt=media&token=a17efa93-0d7e-4f67-b029-39e936bc8ca3",
            }}
          />
          <Image
            style={PayslipStyle.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9lw0w0502pd-I26%3A488%3B14%3A8?alt=media&token=3a537f92-74ae-4d31-8bc4-0a3e39ea3f8a",
            }}
          />
        </View>
        <View style={PayslipStyle.Group409}>
          <Text style={PayslipStyle.Txt654}>Upload Payslip</Text>
          <Image
            style={PayslipStyle.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9lw0w0502pd-71%3A544?alt=media&token=31797444-809b-4c4e-98d2-0207fe807a2f",
            }}
          />
          <Image
            style={PayslipStyle.Vector4}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9lw0w0502pd-71%3A543?alt=media&token=b51015f8-ec4b-49e2-9406-b524cd3d9451",
            }}
          />
          <Image
            style={PayslipStyle.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9lw0w0502pd-71%3A545?alt=media&token=14d28e8b-c9ac-44fc-9326-3d403f8977ec",
            }}
          />
          <Image
            style={PayslipStyle.Vector5}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9lw0w0502pd-71%3A546?alt=media&token=bebf528a-f67b-485d-b022-9b9123b80eac",
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.popToTop())}
        >
          <View style={PayslipStyle.Group50}>
            <Text style={PayslipStyle.Txt736}>Delete application</Text>
          </View>
        </TouchableOpacity>
        <Text style={PayslipStyle.Txt303}>
          Please upload your past 6 month’s net income as one PDF
        </Text>
        <View style={PayslipStyle.Group663}>
          <Text style={PayslipStyle.Txt184}>
            Michael Wang_Compiled Pay....pdf
          </Text>
        </View>
        <Image
          style={PayslipStyle.Group57}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9lw0w0502pd-71%3A672?alt=media&token=bacc1828-34f4-4486-a606-4edc15b2f431",
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("EmployeesParticulars")}
        >
          <View style={PayslipStyle.Group210}>
            <Text style={PayslipStyle.Txt515}>Save and Continue</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={PayslipStyle.Group371}>
            <Text style={PayslipStyle.Txt515}>Save and Go Back</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={PayslipStyle.Group608}>
        <Text style={PayslipStyle.Txt837}>Upload</Text>
      </View>
    </View>
  );
}

function EmployeesParticularsLoad() {
  const navigation = useNavigation();
  return (
    <View style={EmployeesParticularsStyle.EnterParticulars}>
      <View style={EmployeesParticularsStyle.Group835}>
        <View style={EmployeesParticularsStyle.Group835}>
          <Text style={EmployeesParticularsStyle.Txt699}>NS/SV Training</Text>
          <View style={EmployeesParticularsStyle.Group247}>
            <Text style={EmployeesParticularsStyle.Txt275}>Start Date</Text>
            <Text style={EmployeesParticularsStyle.Txt892}>End Date</Text>
          </View>
          <View style={EmployeesParticularsStyle.Group4104}>
            <Text style={EmployeesParticularsStyle.Txt087}>DD/MM/YYYY</Text>
          </View>
          <Text style={EmployeesParticularsStyle.Txt7106}>
            Occupation/Designation
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={EmployeesParticularsStyle.Group399}>
              <Text style={EmployeesParticularsStyle.Txt9210}>
                Save and Go Back
              </Text>
            </View>
          </TouchableOpacity>
          <View style={EmployeesParticularsStyle.Rectangle126} />
          <Text style={EmployeesParticularsStyle.Txt114}>
            Company Particulars
          </Text>
          <View style={EmployeesParticularsStyle.Rectangle124} />
          <Text style={EmployeesParticularsStyle.Txt250}>Name</Text>
          <Text style={EmployeesParticularsStyle.Txt460}>Address</Text>
          <View style={EmployeesParticularsStyle.Rectangle125} />
          <Text style={EmployeesParticularsStyle.Txt892}>Phone</Text>
          <View style={EmployeesParticularsStyle.Group71010}>
            <View style={EmployeesParticularsStyle.Group896}>
              <Text style={EmployeesParticularsStyle.Txt087}>DD/MM/YYYY</Text>
            </View>
            <View style={EmployeesParticularsStyle.Group520}>
              <Text style={EmployeesParticularsStyle.Txt087}>DD/MM/YYYY</Text>
            </View>
          </View>
          <Text style={EmployeesParticularsStyle.Txt289}>
            Date of Employment
          </Text>
          <View style={EmployeesParticularsStyle.Rectangle123} />
          <TouchableOpacity
            onPress={() => navigation.dispatch(StackActions.popToTop())}
          >
            <View style={EmployeesParticularsStyle.Group51}>
              <Text style={EmployeesParticularsStyle.Txt6310}>
                Delete application
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("EmployeesConfirmation")}
          >
            <View style={EmployeesParticularsStyle.Group362}>
              <Text style={EmployeesParticularsStyle.Txt9210}>
                Save and Continue
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={EmployeesParticularsStyle.Group002}>
          <Image
            style={EmployeesParticularsStyle.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6zib5b3q9cf-71%3A338?alt=media&token=57410986-7571-402f-972f-84be201039fa",
            }}
          />
          <View style={EmployeesParticularsStyle.Group433}>
            <Text style={EmployeesParticularsStyle.Txt835}>Particulars</Text>
            <Image
              style={EmployeesParticularsStyle.Vector1}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6zib5b3q9cf-71%3A339?alt=media&token=faeb1b0d-a964-43cf-883f-ca75d8ecba65",
              }}
            />
            <Image
              style={EmployeesParticularsStyle.Vector2}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6zib5b3q9cf-71%3A360?alt=media&token=a952b947-e55a-4471-8388-678917f49a64",
              }}
            />
            <Image
              style={EmployeesParticularsStyle.Vector2}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6zib5b3q9cf-71%3A359?alt=media&token=006a1626-aa51-46e5-91ca-fe1b80630215",
              }}
            />
            <Image
              style={EmployeesParticularsStyle.Vector3}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6zib5b3q9cf-71%3A361?alt=media&token=3a04c37a-d5fe-4ce9-aeca-85a27113378c",
              }}
            />
            <Image
              style={EmployeesParticularsStyle.Vector}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6zib5b3q9cf-71%3A362?alt=media&token=ae5d7a73-caee-4be3-bff9-bf410bfb64e8",
              }}
            />
          </View>
          <Image
            style={EmployeesParticularsStyle.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6zib5b3q9cf-71%3A340?alt=media&token=998c5e5d-2f1b-4b53-96c7-8a2e0aa40665",
            }}
          />
          <Image
            style={EmployeesParticularsStyle.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6zib5b3q9cf-71%3A341?alt=media&token=cf0c4c29-4e97-4bc3-8978-87382f9c159d",
            }}
          />
          <Image
            style={EmployeesParticularsStyle.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6zib5b3q9cf-71%3A342?alt=media&token=abee835c-dfed-4f30-8625-a01d573eac32",
            }}
          />
          <Text style={EmployeesParticularsStyle.Txt192}>Make Up Pay </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.popToTop())}
        >
          <View style={EmployeesParticularsStyle.Group511}>
            <Text style={EmployeesParticularsStyle.Txt6310}>
              Delete application
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function EmployeesConfirmationLoad() {
  const navigation = useNavigation();
  return (
    <View style={EmployeesConfirmationStyles.ReviewSubmission}>
      <View style={EmployeesConfirmationStyles.Group728}>
        <View style={EmployeesConfirmationStyles.Component2}>
          <Text style={EmployeesConfirmationStyles.Txt281}>8:55</Text>
          <Image
            style={EmployeesConfirmationStyles.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/96vxv0w9kc8-I71%3A382%3B14%3A9?alt=media&token=d9e8d49b-1a57-48ff-a097-a97094fb9999",
            }}
          />
          <Image
            style={EmployeesConfirmationStyles.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/96vxv0w9kc8-I71%3A382%3B14%3A7?alt=media&token=d1e2bde6-c211-4faf-8853-40315c0deb15",
            }}
          />
          <Image
            style={EmployeesConfirmationStyles.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/96vxv0w9kc8-I71%3A382%3B14%3A8?alt=media&token=6e3fd394-d3a7-4e8e-9a5a-4c91f1432a04",
            }}
          />
        </View>
        <View style={EmployeesConfirmationStyles.Group742}>
          <View style={EmployeesConfirmationStyles.Group819}>
            <Text style={EmployeesConfirmationStyles.Txt163}>Review</Text>
            <Image
              style={EmployeesConfirmationStyles.Vector3}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/96vxv0w9kc8-71%3A400?alt=media&token=87aaf535-325f-4beb-add7-62da938f3bff",
              }}
            />
            <Image
              style={EmployeesConfirmationStyles.Vector3}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/96vxv0w9kc8-71%3A660?alt=media&token=75de3b39-13f9-4b2a-a958-36eb1d8d8e75",
              }}
            />
            <Image
              style={EmployeesConfirmationStyles.Vector4}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/96vxv0w9kc8-71%3A401?alt=media&token=a5b7bd41-6200-4053-a20c-b1706f2077b3",
              }}
            />
            <Image
              style={EmployeesConfirmationStyles.Vector5}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/96vxv0w9kc8-71%3A398?alt=media&token=7a7d6cfd-81db-43dd-9026-bafbf43f8dc2",
              }}
            />
          </View>
          <Text style={EmployeesConfirmationStyles.Txt897}>Make Up Pay </Text>
        </View>
        <View style={EmployeesConfirmationStyles.Group309}>
          <View style={EmployeesConfirmationStyles.Group213}>
            <Text style={EmployeesConfirmationStyles.Txt795}>
              Review your submission
            </Text>
            <Text style={EmployeesConfirmationStyles.Txt609}>
              CAIFAN Engineering Pte. Ltd.
            </Text>
          </View>
          <View style={EmployeesConfirmationStyles.Group133}>
            <View style={EmployeesConfirmationStyles.Line1} />
            <Text style={EmployeesConfirmationStyles.Txt128}>Claim Option</Text>
            <View style={EmployeesConfirmationStyles.Frame2}>
              <Text style={EmployeesConfirmationStyles.Txt918}>
                Average Income
              </Text>
            </View>
            <Image
              style={EmployeesConfirmationStyles.Vector6}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/96vxv0w9kc8-71%3A581?alt=media&token=3e67fff0-db8c-4618-962b-af4d70fa5605",
              }}
            />
          </View>
          <View style={EmployeesConfirmationStyles.Group7210}>
            <Text style={EmployeesConfirmationStyles.Txt944}>
              Payslip Upload
            </Text>
            <Text style={EmployeesConfirmationStyles.Txt747}>
              Michael Wang_Co....pdf
            </Text>
            <Image
              style={EmployeesConfirmationStyles.Vector6}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/96vxv0w9kc8-71%3A582?alt=media&token=4e8ea218-74aa-4397-a0b0-d3e7168f56e6",
              }}
            />
          </View>
          <View style={EmployeesConfirmationStyles.Line2} />
          <View style={EmployeesConfirmationStyles.Group7210}>
            <Text style={EmployeesConfirmationStyles.Txt143}>
              NS/SV Training
            </Text>
            <Image
              style={EmployeesConfirmationStyles.Vector6}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/96vxv0w9kc8-71%3A583?alt=media&token=6e787179-db9c-4be2-ae9d-3ee45d2cad62",
              }}
            />
          </View>
          <View style={EmployeesConfirmationStyles.Group1019}>
            <Text style={EmployeesConfirmationStyles.Txt684}>Start Date</Text>
            <Text style={EmployeesConfirmationStyles.Txt609}>15/03/2022</Text>
          </View>
          <View style={EmployeesConfirmationStyles.Group1019}>
            <Text style={EmployeesConfirmationStyles.Txt284}>End Date</Text>
            <Text style={EmployeesConfirmationStyles.Txt609}>31/03/2022</Text>
          </View>
          <View style={EmployeesConfirmationStyles.Group929}>
            <Text style={EmployeesConfirmationStyles.Txt774}>
              Occupation/ Designation
            </Text>
            <Text style={EmployeesConfirmationStyles.Txt609}>
              Principle Engineer
            </Text>
          </View>
          <View style={EmployeesConfirmationStyles.Group316}>
            <Text style={EmployeesConfirmationStyles.Txt8210}>Address</Text>
            <Text style={EmployeesConfirmationStyles.Txt609}>
              5 Cai Fan Lane, Singapore 324533
            </Text>
          </View>
          <Text style={EmployeesConfirmationStyles.Txt941}>
            Company Particulars
          </Text>
          <View style={EmployeesConfirmationStyles.Group316}>
            <Text style={EmployeesConfirmationStyles.Txt361}>Phone</Text>
            <Text style={EmployeesConfirmationStyles.Txt609}>6570 3498</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("EmployeesSubmission")}
        >
          <View style={EmployeesConfirmationStyles.Group767}>
            <Text style={EmployeesConfirmationStyles.Txt399}>Submit</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={EmployeesConfirmationStyles.Group9810}>
            <Text style={EmployeesConfirmationStyles.Txt399}>
              Save and Go Back
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      >
        <View style={EmployeesConfirmationStyles.Group52}>
          <Text style={EmployeesConfirmationStyles.Txt156}>
            Delete application
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function EmployeesSubmissionLoad() {
  const navigation = useNavigation();
  return (
    <View style={EmployeesSubmissionStyle.MakeUpPayCompleted}>
      <View style={EmployeesSubmissionStyle.Group543}>
        <View style={EmployeesSubmissionStyle.Component2}>
          <Text style={EmployeesSubmissionStyle.Txt090}>8:55</Text>
          <Image
            style={EmployeesSubmissionStyle.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/lpgyl8587ym-I26%3A941%3B14%3A9?alt=media&token=0ef6bc5d-2541-439d-acff-2635f7f2a54f",
            }}
          />
          <Image
            style={EmployeesSubmissionStyle.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/lpgyl8587ym-I26%3A941%3B14%3A7?alt=media&token=3d6e9ff5-f623-4ff3-8f26-d4253f7dde25",
            }}
          />
          <Image
            style={EmployeesSubmissionStyle.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/lpgyl8587ym-I26%3A941%3B14%3A8?alt=media&token=929386b7-1845-41f6-bac7-96bc3ddfd9d9",
            }}
          />
        </View>
        <View style={EmployeesSubmissionStyle.Group191}>
          <Text style={EmployeesSubmissionStyle.Txt755}>
            Make Up Pay Submitted{" "}
          </Text>
        </View>
        <Image
          style={EmployeesSubmissionStyle.Undraw_well_done_i2wr1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/lpgyl8587ym-26%3A1046?alt=media&token=2c7c0a3b-ea5d-471a-a5ef-e6f18fc26b20",
          }}
        />
        <Text style={EmployeesSubmissionStyle.Txt526}>
          Congratulations on completing the Make Up Pay application Please give
          up to 7 working days for payment to be received.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.popToTop())}
        >
          <View style={EmployeesSubmissionStyle.Group459}>
            <Text style={EmployeesSubmissionStyle.Txt413}>Back to Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

//EMPLOYERS FORM
function ManageEmployeesLoad() {
  const navigation = useNavigation();
  return (
    <View style={ManageEmployeesStyle.ManageEmployees}>
      <View style={ManageEmployeesStyle.Group183}>
        <View style={ManageEmployeesStyle.Component4}>
          <Text style={ManageEmployeesStyle.Txt667}>8:55</Text>
          <Image
            style={ManageEmployeesStyle.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/78bjvtppqt-I71%3A124%3B14%3A9?alt=media&token=be93ecb7-20b9-4653-8672-f5a5eb5638e8",
            }}
          />
          <Image
            style={ManageEmployeesStyle.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/78bjvtppqt-I71%3A124%3B14%3A7?alt=media&token=e9704e4c-06de-4f6c-81d0-9c63de15a8a7",
            }}
          />
          <Image
            style={ManageEmployeesStyle.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/78bjvtppqt-I71%3A124%3B14%3A8?alt=media&token=8297e653-4529-4541-83dd-78218dac5dd8",
            }}
          />
        </View>
        <View style={ManageEmployeesStyle.Group858}>
          <Text style={ManageEmployeesStyle.Txt814}>
            Application for Employers
          </Text>
          <Text style={ManageEmployeesStyle.Txt814}>
            Application for Employers
          </Text>
        </View>
        <View style={ManageEmployeesStyle.Group451}>
          <Image
            style={ManageEmployeesStyle.Undraw_fill_form_re_cwyf11}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/78bjvtppqt-70%3A284?alt=media&token=8278a94f-658d-4db3-bb25-533f08aea479",
            }}
          />
        </View>
        <Text style={ManageEmployeesStyle.multiple1}>
          Start New Application to begin your Make Up Pay claim. Resume
          Application to continue from where you previously left off.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Timesheet")}>
          <View style={ManageEmployeesStyle.Group57}>
            <Text style={ManageEmployeesStyle.Txt10102}>
              Start New Application
            </Text>
          </View>
        </TouchableOpacity>
        <View style={ManageEmployeesStyle.Group56}>
          <Text style={ManageEmployeesStyle.Txt10102}>Resume Application</Text>
        </View>
      </View>
    </View>
  );
}

function TimesheetLoad() {
  const navigation = useNavigation();

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result.uri);
    console.log(result);
    console.log(result.name);
  };

  return (
    <View style={TimesheetStyles.UploadTimesheet}>
      <View style={TimesheetStyles.Group7106}>
        <View style={TimesheetStyles.Component2}>
          <Text style={TimesheetStyles.Txt4410}>8:55</Text>
          <Image
            style={TimesheetStyles.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qeyfh3vxvx-I70%3A332%3B14%3A9?alt=media&token=ad920c35-f4d4-48f6-bd31-c16406cca997",
            }}
          />
          <Image
            style={TimesheetStyles.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qeyfh3vxvx-I70%3A332%3B14%3A7?alt=media&token=4f797f04-04b1-403d-aa13-b1eb0cfb8229",
            }}
          />
          <Image
            style={TimesheetStyles.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qeyfh3vxvx-I70%3A332%3B14%3A8?alt=media&token=e906c0de-af28-4fda-9fc4-9137b99fec73",
            }}
          />
        </View>
        <View style={TimesheetStyles.Group765}>
          <Text style={TimesheetStyles.Txt223}>Upload Hours</Text>
          <Image
            style={TimesheetStyles.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qeyfh3vxvx-71%3A734?alt=media&token=b4670399-297b-404b-b0b6-b4727a99c307",
            }}
          />
          <Image
            style={TimesheetStyles.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qeyfh3vxvx-71%3A735?alt=media&token=5f1aab67-3f37-4bca-a291-8b5001798fba",
            }}
          />
          <Image
            style={TimesheetStyles.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qeyfh3vxvx-71%3A736?alt=media&token=7bc4ec98-3515-4fd6-b203-77b90ac33adb",
            }}
          />
          <Image
            style={TimesheetStyles.Vector4}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qeyfh3vxvx-71%3A737?alt=media&token=323f14ae-42ff-48a1-88a0-56913e9218eb",
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.popToTop())}
        >
          <View style={TimesheetStyles.Group53}>
            <Text style={TimesheetStyles.Txt296}>Delete application</Text>
          </View>
        </TouchableOpacity>
        <Text style={TimesheetStyles.Txt1088}>
          Please upload your employee’s working hours as a spreadsheet or excel
          file.
        </Text>
        <View style={TimesheetStyles.Group59}>
          <Text style={TimesheetStyles.Txt5910}></Text>
          <TouchableOpacity onPress={pickDocument}>
            <View style={TimesheetStyles.Group397}>
              <Text style={TimesheetStyles.Txt492}>Upload</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Image
          style={TimesheetStyles.Group60}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qeyfh3vxvx-71%3A1018?alt=media&token=a0d82d1e-3610-4a20-9b93-fea609f6424b",
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("EmployersParticulars1")}
        >
          <View style={TimesheetStyles.Group1023}>
            <Text style={TimesheetStyles.Txt1061}>Save and Continue</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={TimesheetStyles.Group233}>
            <Text style={TimesheetStyles.Txt1061}>Save and Go Back</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function EmployersParticulars1Load() {
  const navigation = useNavigation();

  const [CSN, onChangeCSN] = React.useState("");
  const [EmployeeName, onChangeEmployeeName] = React.useState("");
  const [EmployeeAddress, onChangeEmployeeAddress] = React.useState("");
  const [EmployeePhone, onChangeEmployeePhone] = React.useState("");
  const [EmployeeOccupation, onChangeEmployeeOccupation] = React.useState("");
  const [EmployeeEmployment, onChangeEmployeeEmployment] =
    React.useState("DD/MM/YYYY");

  return (
    <View style={EmployersParticulars1.EmployeeSDetails}>
      <View style={EmployersParticulars1.Group352}>
        <View style={EmployersParticulars1.Component4}>
          <Text style={EmployersParticulars1.Txt294}>8:55</Text>
          <Image
            style={EmployersParticulars1.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/b8u274czw5r-I71%3A910%3B14%3A9?alt=media&token=e11acb73-030e-4cc1-853a-1b4cce289d01",
            }}
          />
          <Image
            style={EmployersParticulars1.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/b8u274czw5r-I71%3A910%3B14%3A7?alt=media&token=75b3e64a-e0b6-4624-8ef9-25b27da51267",
            }}
          />
          <Image
            style={EmployersParticulars1.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/b8u274czw5r-I71%3A910%3B14%3A8?alt=media&token=4527323e-f635-4d46-9736-dee0cbdfa9ed",
            }}
          />
        </View>
        <View style={EmployersParticulars1.Group524}>
          <Text style={EmployersParticulars1.Txt384}>Particulars</Text>
          <View style={EmployersParticulars1.Group311}>
            <Text style={EmployersParticulars1.Txt502}>
              Employee Particulars
            </Text>
            <Image
              style={EmployersParticulars1.Vector3}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/b8u274czw5r-71%3A1020?alt=media&token=e98aed13-bec4-4dff-ac20-8552c8d8bd10",
              }}
            />
            <Image
              style={EmployersParticulars1.Vector3}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/b8u274czw5r-71%3A1021?alt=media&token=03ba0baf-a6b0-4680-bb86-ce373682bae6",
              }}
            />
            <Image
              style={EmployersParticulars1.Vector3}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/b8u274czw5r-71%3A1022?alt=media&token=3773130a-550d-44db-baf2-c32e21543ac6",
              }}
            />
            <Image
              style={EmployersParticulars1.Vector4}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/b8u274czw5r-71%3A1023?alt=media&token=90c1f1d6-1a15-4a64-9175-ed45bf942ee2",
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.popToTop())}
        >
          <View style={EmployersParticulars1.Group55}>
            <Text style={EmployersParticulars1.Txt209}>Delete application</Text>
          </View>
        </TouchableOpacity>
        <Text style={EmployersParticulars1.Txt729}>
          Please enter your employee’s details.
        </Text>
        <View style={EmployersParticulars1.Group62}>
          <Text style={EmployersParticulars1.Txt394}>
            CPF Submission Number (CSN)
          </Text>
          <TextInput
            style={styles.LongTextInput}
            onChangeText={onChangeCSN}
            value={CSN}
          />
          <Text style={EmployersParticulars1.Txt466}>
            Employee’s Company Particulars
          </Text>
          <Text style={EmployersParticulars1.Txt894}>Name</Text>
          <TextInput
            style={styles.LongTextInput}
            onChangeText={onChangeEmployeeName}
            value={EmployeeName}
          />
          <Text style={EmployersParticulars1.Txt894}>Address</Text>
          <TextInput
            style={styles.LongTextInput}
            onChangeText={onChangeEmployeeAddress}
            value={EmployeeAddress}
          />
          <Text style={EmployersParticulars1.Txt396}>Phone</Text>
          <TextInput
            style={styles.ShortTextInput}
            onChangeText={onChangeEmployeePhone}
            value={EmployeePhone}
          />
          <Text style={EmployersParticulars1.Txt748}>Employee Particulars</Text>
          <Text style={EmployersParticulars1.Txt894}>
            Occupation/Designation
          </Text>
          <TextInput
            style={styles.ShortTextInput}
            onChangeText={onChangeEmployeeOccupation}
            value={EmployeeOccupation}
          />
          <Text style={EmployersParticulars1.Txt894}>Date of Employment</Text>
          <TextInput
            style={styles.ShortTextInput}
            onChangeText={onChangeEmployeeEmployment}
            value={EmployeeEmployment}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("EmployersParticulars2")}
        >
          <View style={EmployersParticulars1.Group683}>
            <Text style={EmployersParticulars1.Txt770}>Save and Continue</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={EmployersParticulars1.Group764}>
            <Text style={EmployersParticulars1.Txt770}>Save and Go Back</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function EmployersParticulars2Load() {
  const navigation = useNavigation();

  const [EmployerName, onChangeEmployerName] = React.useState("Michael Wang");
  const [EmployerOccupation, onChangeEmployerOccupation] = React.useState("");
  const [EmployerNRIC, onChangeEmployerNRIC] = React.useState("S1234567G");
  const [EmployerPhone, onChangeEmployerPhone] = React.useState("96323488");
  const [EmployerEmail, onChangeEmployerEmail] = React.useState(
    "MichaelWang@gmail.com"
  );

  return (
    <View style={EmployersParticulars2.CertifyingOfficerSDetails}>
      <View style={EmployersParticulars2.Group963}>
        <View style={EmployersParticulars2.Component4}>
          <Text style={EmployersParticulars2.Txt1098}>8:55</Text>
          <Image
            style={EmployersParticulars2.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qw29zmqko-I71%3A971%3B14%3A9?alt=media&token=a637697b-79dd-4c20-934b-3cec2c2fa9e9",
            }}
          />
          <Image
            style={EmployersParticulars2.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qw29zmqko-I71%3A971%3B14%3A7?alt=media&token=1e036598-2e02-40c7-ae92-181ac4d8e8f0",
            }}
          />
          <Image
            style={EmployersParticulars2.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qw29zmqko-I71%3A971%3B14%3A8?alt=media&token=3bf718dd-f549-4885-bb57-1881afffb349",
            }}
          />
        </View>
        <View style={EmployersParticulars2.Group7109}>
          <Text style={EmployersParticulars2.Txt374}>Officer Particulars</Text>
          <Image
            style={EmployersParticulars2.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qw29zmqko-71%3A1025?alt=media&token=a84a8832-0b13-4e42-89f8-01de860f9848",
            }}
          />
          <Image
            style={EmployersParticulars2.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qw29zmqko-71%3A1026?alt=media&token=e580333f-84a6-4ea4-8893-973c367036a2",
            }}
          />
          <Image
            style={EmployersParticulars2.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qw29zmqko-71%3A1027?alt=media&token=7824bbaf-c9c2-4e49-b0a5-6438d648074b",
            }}
          />
          <Image
            style={EmployersParticulars2.Vector4}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qw29zmqko-71%3A1028?alt=media&token=97ebba28-d8ea-43db-8e4b-892ff1dbf1dc",
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.popToTop())}
        >
          <View style={EmployersParticulars2.Group55}>
            <Text style={EmployersParticulars2.Txt886}>Delete application</Text>
          </View>
        </TouchableOpacity>
        <View style={EmployersParticulars2.Group61}>
          <Text style={EmployersParticulars2.Txt536}>Name</Text>
          <TextInput
            style={styles.LongTextInput}
            onChangeText={onChangeEmployerName}
            value={EmployerName}
          />
          <Text style={EmployersParticulars2.Txt178}>
            Occupation/Designation
          </Text>
          <TextInput
            style={styles.LongTextInput}
            onChangeText={onChangeEmployerOccupation}
            value={EmployerOccupation}
          />
          <Text style={EmployersParticulars2.Txt178}>
            NRIC / FIN / Passport No.
          </Text>
          <TextInput
            style={styles.ShortTextInput}
            onChangeText={onChangeEmployerNRIC}
            value={EmployerNRIC}
          />
          <Text style={EmployersParticulars2.Txt536}>Phone</Text>
          <View style={EmployersParticulars2.Rectangle132} />
          <Text style={EmployersParticulars2.Txt536}>Email</Text>
          <View style={EmployersParticulars2.Rectangle145} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("EmployersConfirmation")}
        >
          <View style={EmployersParticulars2.Group226}>
            <Text style={EmployersParticulars2.Txt453}>Save and Continue</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={EmployersParticulars2.Group336}>
            <Text style={EmployersParticulars2.Txt453}>Save and Go Back</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={EmployersParticulars2.Txt635}>
        Please enter your details.
      </Text>
    </View>
  );
}

function EmployersConfirmationLoad() {
  const navigation = useNavigation();
  return (
    <View style={EmployersConfirmationStyle.ReviewSubmission}>
      <View style={EmployersConfirmationStyle.Group376}>
        <View style={EmployersConfirmationStyle.Component8}>
          <Text style={EmployersConfirmationStyle.Txt201}>8:55</Text>
          <Image
            style={EmployersConfirmationStyle.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/n0ocjs0a8yg-I71%3A779%3B14%3A9?alt=media&token=6df2ae0b-171f-45a9-8cef-6824a02e1dc5",
            }}
          />
          <Image
            style={EmployersConfirmationStyle.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/n0ocjs0a8yg-I71%3A779%3B14%3A7?alt=media&token=cfe2b737-fe1d-46a5-9bcd-740974e9c265",
            }}
          />
          <Image
            style={EmployersConfirmationStyle.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/n0ocjs0a8yg-I71%3A779%3B14%3A8?alt=media&token=a781c205-25e2-4967-b52c-77ee3bc9e460",
            }}
          />
        </View>
        <View style={EmployersConfirmationStyle.Group778}>
          <Text style={EmployersConfirmationStyle.Txt114}>Review</Text>
          <View style={EmployersConfirmationStyle.Group757}>
            <Text style={EmployersConfirmationStyle.Txt456}>Review</Text>
            <Image
              style={EmployersConfirmationStyle.Vector3}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/n0ocjs0a8yg-71%3A1035?alt=media&token=be6579cc-4316-49e1-a7bb-52b2e2d8a416",
              }}
            />
            <Image
              style={EmployersConfirmationStyle.Vector3}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/n0ocjs0a8yg-71%3A1036?alt=media&token=b16f8044-6f10-4cbd-8cb7-bef4088911a8",
              }}
            />
            <Image
              style={EmployersConfirmationStyle.Vector3}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/n0ocjs0a8yg-71%3A1037?alt=media&token=336f7362-19a8-47bc-90d8-db5168419372",
              }}
            />
            <Image
              style={EmployersConfirmationStyle.Vector4}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/n0ocjs0a8yg-71%3A1038?alt=media&token=13de3dc4-b7b9-4f99-a69f-fef435b5c130",
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.popToTop())}
        >
          <View style={EmployersConfirmationStyle.Group58}>
            <Text style={EmployersConfirmationStyle.Txt017}>
              Delete application
            </Text>
          </View>
        </TouchableOpacity>
        <View style={EmployersConfirmationStyle.Group625}>
          <Text style={EmployersConfirmationStyle.Txt375}>
            Review your submission
          </Text>
          <View style={EmployersConfirmationStyle.Group554}>
            <Text style={EmployersConfirmationStyle.Txt548}>Hours Upload</Text>
            <Text style={EmployersConfirmationStyle.Txt200}>
              Michael Wang_Wo....xls
            </Text>
            <Image
              style={EmployersConfirmationStyle.Vector5}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/n0ocjs0a8yg-71%3A1072?alt=media&token=9daaace7-cc6a-42bb-8466-351448e52d54",
              }}
            />
          </View>
          <View style={EmployersConfirmationStyle.Line3} />
          <View style={EmployersConfirmationStyle.Group2105}>
            <Text style={EmployersConfirmationStyle.Txt719}>CSN</Text>
            <Image
              style={EmployersConfirmationStyle.Vector5}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/n0ocjs0a8yg-71%3A1073?alt=media&token=b5e73c3a-61d6-4d88-ab46-2f8ce7ac5094",
              }}
            />
          </View>
          <Text style={EmployersConfirmationStyle.Txt4710}>
            Employee’s Company Particulars
          </Text>
          <View style={EmployersConfirmationStyle.Group805}>
            <Text style={EmployersConfirmationStyle.Txt21010}>Name</Text>
            <Text style={EmployersConfirmationStyle.Txt1103}>
              CAIFAN Engineering Pte. Ltd.
            </Text>
          </View>
          <View style={EmployersConfirmationStyle.Group554}>
            <Text style={EmployersConfirmationStyle.Txt2101}>Address</Text>
            <Text style={EmployersConfirmationStyle.Txt1103}>
              5 Cai Fan Lane, Singapore 324533
            </Text>
          </View>
          <View style={EmployersConfirmationStyle.Group807}>
            <Text style={EmployersConfirmationStyle.Txt3910}>Phone</Text>
            <Text style={EmployersConfirmationStyle.Txt1103}>6570 3498</Text>
          </View>
          <Text style={EmployersConfirmationStyle.Txt604}>
            Employee’s Particulars
          </Text>
          <View style={EmployersConfirmationStyle.Group735}>
            <Text style={EmployersConfirmationStyle.Txt373}>
              Occupation/ Designation
            </Text>
            <Text style={EmployersConfirmationStyle.Txt1103}>
              Principle Engineer
            </Text>
          </View>
          <View style={EmployersConfirmationStyle.Group1092}>
            <Text style={EmployersConfirmationStyle.Txt439}>
              Date of Employment
            </Text>
            <View style={EmployersConfirmationStyle.Line4} />
            <Text style={EmployersConfirmationStyle.Txt1103}>12/07/2020</Text>
          </View>
          <View style={EmployersConfirmationStyle.Group344}>
            <Text style={EmployersConfirmationStyle.Txt744}>
              Officer’s Particulars
            </Text>
            <Image
              style={EmployersConfirmationStyle.Vector5}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/n0ocjs0a8yg-71%3A1152?alt=media&token=67f0311c-b9c2-49e8-b5bb-a52878eba364",
              }}
            />
          </View>
          <View style={EmployersConfirmationStyle.Group805}>
            <Text style={EmployersConfirmationStyle.Txt584}>Name</Text>
            <Text style={EmployersConfirmationStyle.Txt1103}>
              Vanessa Lim Yi Ling
            </Text>
          </View>
          <View style={EmployersConfirmationStyle.Group542}>
            <Text style={EmployersConfirmationStyle.Txt008}>
              Occupation/ Designation
            </Text>
            <Text style={EmployersConfirmationStyle.Txt1103}>
              Human Resource Assistant
            </Text>
          </View>
          <View style={EmployersConfirmationStyle.Group160}>
            <Text style={EmployersConfirmationStyle.Txt1105}>
              NRIC/FIN/ Passport No.
            </Text>
            <Text style={EmployersConfirmationStyle.Txt1103}>AXXXX958A</Text>
          </View>
          <View style={EmployersConfirmationStyle.Group045}>
            <Text style={EmployersConfirmationStyle.Txt155}>Phone</Text>
            <Text style={EmployersConfirmationStyle.Txt1103}>6570 3254</Text>
          </View>
          <View style={EmployersConfirmationStyle.Group757}>
            <Text style={EmployersConfirmationStyle.Txt584}>Email</Text>
            <Text style={EmployersConfirmationStyle.Txt1103}>
              vanessa.lyl@caifan.com.sg
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("EmployersSubmission")}
        >
          <View style={EmployersConfirmationStyle.Group699}>
            <Text style={EmployersConfirmationStyle.Txt731}>
              Save and Continue
            </Text>
            <Text style={EmployersConfirmationStyle.Txt731}>Submit</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={EmployersConfirmationStyle.Group545}>
            <Text style={EmployersConfirmationStyle.Txt731}>
              Save and Go Back
            </Text>
          </View>
        </TouchableOpacity>
        '
      </View>
    </View>
  );
}

function EmployersSubmissionLoad() {
  const navigation = useNavigation();
  return (
    <View style={EmployersSubmissionStyle.MeFinal}>
      <View style={EmployersSubmissionStyle.Group778}>
        <View style={EmployersSubmissionStyle.Component2}>
          <Text style={EmployersSubmissionStyle.Txt523}>8:55</Text>
          <Image
            style={EmployersSubmissionStyle.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zt4u4v7dhwq-I70%3A530%3B14%3A9?alt=media&token=95649e1e-38dc-41c1-8c8b-c22e5c55525e",
            }}
          />
          <Image
            style={EmployersSubmissionStyle.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zt4u4v7dhwq-I70%3A530%3B14%3A7?alt=media&token=2bc59377-fbad-4bad-b69b-a97875573382",
            }}
          />
          <Image
            style={EmployersSubmissionStyle.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zt4u4v7dhwq-I70%3A530%3B14%3A8?alt=media&token=a37aed25-f053-4d25-90ea-0a4d873021d5",
            }}
          />
        </View>
        <View style={EmployersSubmissionStyle.Group991}>
          <Text style={EmployersSubmissionStyle.Txt748}>
            Make Up Pay Submitted{" "}
          </Text>
        </View>
        <Image
          style={EmployersSubmissionStyle.Undraw_well_done_i2wr1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zt4u4v7dhwq-70%3A537?alt=media&token=9fbdebb6-8a3c-47c4-90a3-974183cf6661",
          }}
        />
        <Text style={EmployersSubmissionStyle.Txt386}>
          Congratulations on completing the Make Up Pay claims for employees.
          Please give up to 7 working days for submission to be processed.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.popToTop())}
        >
          <View style={EmployersSubmissionStyle.Group6910}>
            <Text style={EmployersSubmissionStyle.Txt3107}>
              Back to Profile
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

//Export default stack
export default function FormStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileLoad}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ManageMakeUpPay"
        component={ManageMakeUpPayLoad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ClaimsOptions"
        component={ClaimsOptionsLoad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payslip"
        component={PaySlipLoad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmployeesParticulars"
        component={EmployeesParticularsLoad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmployeesConfirmation"
        component={EmployeesConfirmationLoad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmployeesSubmission"
        component={EmployeesSubmissionLoad}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ManageEmployees"
        component={ManageEmployeesLoad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Timesheet"
        component={TimesheetLoad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmployersParticulars1"
        component={EmployersParticulars1Load}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmployersParticulars2"
        component={EmployersParticulars2Load}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmployersConfirmation"
        component={EmployersConfirmationLoad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmployersSubmission"
        component={EmployersSubmissionLoad}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

// Manage Make Up Pay Styles
const ManageMakeUpPayStyle = StyleSheet.create({
  ManageMakeUpPay: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    backgroundColor: "rgba(229,245,223,1)",
    width: 428,
    height: 926,
  },
  Txt758: {
    position: "absolute",
    top: 60,
    left: 53,
    fontSize: 25,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    width: 321,
    height: 60,
  },
  Group321: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: 14,
    width: 428,
    height: 820,
  },
  Component2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  Txt687: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Rectangle9: {
    backgroundColor: "rgba(29,129,20,1)",
    width: 428,
    height: 61,
    marginBottom: 66,
  },
  Undraw_printing_invoices_5R4r1: {
    width: 353,
    height: 218,
    marginBottom: 112,
  },
  multiple1: {
    main: "Txt080",
    seg1: "[object Object]",
    seg2: "[object Object]",
    seg3: "[object Object]",
    seg4: "[object Object]",
    paddingBottom: 20,
    textAlign: "center",
  },
  Group54: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 51,
    paddingRight: 50,
    marginBottom: 32,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt9109: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group55: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 61,
    paddingRight: 60,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt9109: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },
});

// Claims Options Styles
const ClaimsOptionsStyle = StyleSheet.create({
  ClaimsOptions: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 24,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(229,245,223,1)",
    width: 428,
    height: 926,
  },
  Group035: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component4: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  Txt945: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Group823: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 14,
    paddingBottom: 13,
    paddingLeft: 25,
    paddingRight: 21,
    backgroundColor: "rgba(29,129,20,1)",
  },
  Txt533: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    marginRight: 55,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 17,
  },
  Vector4: {
    width: 23,
    height: 23,
    marginRight: 18,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 17,
  },
  Vector5: {
    width: 23,
    height: 23,
  },

  Group52: {
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    marginBottom: 40,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 39,
  },
  Txt732: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(249,0,0,0.9)",
    textAlign: "center",
    justifyContent: "center",
    width: 248,
    height: 22,
  },

  Txt165: {
    fontSize: 23,
    fontWeight: "700",
    color: "rgba(0,0,0,0.85)",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 39,
  },
  Group784: {
    paddingTop: 15,
    paddingBottom: 13,
    paddingLeft: 119,
    paddingRight: 93,
    marginBottom: 39,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    width: 350,
    height: 60,
  },
  Txt494: {
    fontSize: 24,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group932: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 8,
    paddingLeft: 29,
    paddingRight: 40,
    marginBottom: 39,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    shadowColor: "rgba(0,0,0,0.25)",
    elevation: 0,
    shadowOffset: { width: 0, height: 2 },
  },
  Txt737: {
    fontSize: 32,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 58,
  },
  Txt494: {
    fontSize: 24,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group901: {
    paddingTop: 15,
    paddingBottom: 13,
    paddingLeft: 119,
    paddingRight: 73,
    marginBottom: 274,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    width: 350,
    height: 60,
  },
  Txt494: {
    fontSize: 24,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group417: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 68,
    paddingRight: 67,
    marginBottom: 16,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt428: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group792: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 75,
    paddingRight: 70,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt428: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },
});

// Payslip Styles
const PayslipStyle = StyleSheet.create({
  UploadPaySlip: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    paddingTop: 13,
    paddingBottom: 26,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(229,245,223,1)",
    width: 428,
    height: 926,
  },
  Group890: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 11,
  },
  Txt489: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Group409: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 14,
    paddingBottom: 13,
    paddingLeft: 21,
    paddingRight: 21,
    backgroundColor: "rgba(29,129,20,1)",
  },
  Txt654: {
    fontSize: 26,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    marginRight: 51,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 17,
  },
  Vector4: {
    width: 23,
    height: 23,
    marginRight: 18,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 17,
  },
  Vector5: {
    width: 23,
    height: 23,
  },

  Group50: {
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    marginBottom: 43,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 39,
  },
  Txt736: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(249,0,0,0.9)",
    textAlign: "center",
    justifyContent: "center",
    width: 248,
    height: 22,
  },

  Txt303: {
    fontSize: 20,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.85)",
    textAlign: "center",
    justifyContent: "center",
    width: 404,
    marginBottom: 27,
  },
  Group663: {
    paddingTop: 9,
    paddingBottom: 6,
    paddingLeft: 10,
    paddingRight: 108,
    marginBottom: 28,
    borderRadius: 50,
    backgroundColor: "rgba(213,217,212,1)",
    width: 364,
    height: 36,
  },
  Txt184: {
    fontSize: 15,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(47,46,65,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Group57: {
    width: 373,
    height: 241,
    marginBottom: 213,
  },
  Group210: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 68,
    paddingRight: 67,
    marginBottom: 16,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt515: {
    fontSize: 22,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group371: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 73,
    paddingRight: 72,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt515: {
    fontSize: 22,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group608: {
    position: "absolute",
    top: 265,
    none: "0px",
    paddingTop: 8,
    paddingBottom: 6,
    paddingLeft: 22,
    paddingRight: 25,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(213,217,212,1)",
    width: 106,
    height: 36,
  },
  Txt837: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
  },
});

// Particulars Styles
const EmployeesParticularsStyle = StyleSheet.create({
  EnterParticulars: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 31,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(229,245,223,1)",
    width: 428,
    height: 926,
  },
  Group835: {
    display: "flex",
    flexDirection: "column",
  },
  Group835: {
    display: "flex",
    flexDirection: "column",
  },
  Txt699: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 15,
  },
  Group247: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 83,
  },
  Txt275: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 141,
  },
  Txt892: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group4104: {
    paddingTop: 5,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 41,
    marginBottom: 25,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 159,
    height: 30,
  },
  Txt087: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Txt7106: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 455,
  },
  Group399: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 73,
    paddingRight: 72,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 340,
    height: 50,
  },
  Txt9210: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Rectangle126: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 159,
    height: 30,
    borderRadius: 10,
  },
  Txt114: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 43,
  },
  Rectangle124: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
  },
  Txt250: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 60,
  },
  Txt460: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 6,
  },
  Rectangle125: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
    marginBottom: 25,
  },
  Txt892: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },
  Group71010: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 25,
  },
  Group896: {
    paddingTop: 5,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 41,
    marginRight: 60,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 159,
    height: 30,
  },
  Txt087: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group520: {
    paddingTop: 5,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 41,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 159,
    height: 30,
  },
  Txt087: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Txt289: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 89,
  },
  Rectangle123: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
  },
  Group51: {
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    marginBottom: 632,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 39,
  },
  Txt6310: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(249,0,0,0.9)",
    textAlign: "center",
    justifyContent: "center",
    width: 248,
    height: 22,
  },

  Group362: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 68,
    paddingRight: 67,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 340,
    height: 50,
  },
  Txt9210: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group002: {
    marginBottom: 1,
    backgroundColor: "rgba(29,129,20,1)",
    width: 428,
    height: 61,
  },
  Vector: {
    width: 23,
    height: 23,
  },
  Group433: {
    display: "flex",
    flexDirection: "row",
  },
  Txt835: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    marginRight: 50,
  },
  Vector1: {
    width: 23,
    height: 23,
    marginRight: 24,
  },
  Vector2: {
    width: 23,
    height: 23,
    marginRight: 18,
  },
  Vector2: {
    width: 23,
    height: 23,
    marginRight: 18,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 17,
  },
  Vector: {
    width: 23,
    height: 23,
  },

  Vector: {
    width: 23,
    height: 23,
  },
  Vector: {
    width: 23,
    height: 23,
  },
  Vector: {
    width: 23,
    height: 23,
  },
  Txt192: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },

  Group511: {
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 39,
  },
  Txt6310: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(249,0,0,0.9)",
    textAlign: "center",
    justifyContent: "center",
    width: 248,
    height: 22,
  },
});

// Submission Styles
const EmployeesSubmissionStyle = StyleSheet.create({
  MakeUpPayCompleted: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 98,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(229,245,223,1)",
    width: 428,
    height: 926,
  },
  Group543: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 11,
  },
  Txt090: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Group191: {
    paddingTop: 14,
    paddingBottom: 13,
    paddingLeft: 63,
    paddingRight: 60,
    marginBottom: 84,
    backgroundColor: "rgba(29,129,20,1)",
    width: 428,
    height: 61,
  },
  Txt755: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },

  Undraw_well_done_i2wr1: {
    width: 345,
    height: 311,
    marginBottom: 92,
  },
  Txt526: {
    fontSize: 20,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 372,
    height: 114,
    marginBottom: 69,
  },
  Group459: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 90,
    paddingRight: 92,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(213,217,212,1)",
    width: 340,
    height: 50,
  },
  Txt413: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },
});

//Confirmation Styles
const EmployeesConfirmationStyles = StyleSheet.create({
  ReviewSubmission: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    paddingTop: 13,
    paddingBottom: 32,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(229,245,223,1)",
    width: 428,
    height: 926,
  },
  Group728: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 11,
  },
  Txt281: {
    fontSize: 16,

    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Group742: {
    position: "relative",
    marginBottom: 51,
    backgroundColor: "rgba(29,129,20,1)",
    width: 428,
    height: 61,
  },
  Group819: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: 15,
    width: 376,
    height: 32,
  },
  Txt163: {
    fontSize: 26,

    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    marginRight: 138,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 18,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 18,
  },
  Vector4: {
    width: 23,
    height: 23,
    marginRight: 17,
  },
  Vector5: {
    width: 23,
    height: 23,
  },

  Txt897: {
    position: "absolute",
    top: 15,
    left: 36,
    fontSize: 26,

    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    width: 163,
    height: 31,
  },

  Group309: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 13,
    paddingBottom: 29,
    paddingLeft: 6,
    paddingRight: 10,
    marginBottom: 46,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "rgba(0,0,0,0.25)",
    elevation: 0,
    shadowOffset: { width: 0, height: 4 },
  },
  Group213: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  Txt795: {
    fontSize: 20,

    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 19,
  },
  Txt609: {
    fontSize: 16,

    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group133: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 16,
  },
  Line1: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 379,
    height: 1,
  },
  Txt128: {
    fontSize: 18,

    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 28,
  },
  Frame2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 9,
    marginRight: 49,
  },
  Txt918: {
    fontSize: 18,

    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Vector6: {
    width: 21,
    height: 18.66,
  },

  Group7210: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 19,
  },
  Txt944: {
    fontSize: 18,

    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 22,
  },
  Txt747: {
    fontSize: 15,

    fontWeight: "400",
    color: "rgba(47,46,65,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 29,
  },
  Vector6: {
    width: 21,
    height: 18.66,
  },

  Line2: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    transform: "rotate(-0.02deg);",
    width: 379,
    height: 1,
    marginBottom: 16,
  },
  Group7210: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 19,
  },
  Txt143: {
    fontSize: 18,

    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 214,
  },
  Vector6: {
    width: 21,
    height: 18.66,
  },

  Group1019: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  Txt684: {
    fontSize: 16,

    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 72,
  },
  Txt609: {
    fontSize: 16,

    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group1019: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  Txt284: {
    fontSize: 16,

    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 81,
  },
  Txt609: {
    fontSize: 16,

    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group929: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 128,
  },
  Txt774: {
    fontSize: 16,

    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 54,
  },
  Txt609: {
    fontSize: 16,

    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group316: {
    display: "flex",
    flexDirection: "row",
  },
  Txt8210: {
    fontSize: 16,

    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 86,
  },
  Txt609: {
    fontSize: 16,

    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Txt941: {
    fontSize: 18,

    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 119,
  },
  Group316: {
    display: "flex",
    flexDirection: "row",
  },
  Txt361: {
    fontSize: 16,

    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 103,
  },
  Txt609: {
    fontSize: 16,

    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group767: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 131,
    paddingRight: 129,
    marginBottom: 16,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 340,
    height: 50,
  },
  Txt399: {
    fontSize: 22,

    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group9810: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 73,
    paddingRight: 72,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 340,
    height: 50,
  },
  Txt399: {
    fontSize: 22,

    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group52: {
    position: "absolute",
    top: 105,
    left: 0,
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 39,
  },
  Txt156: {
    fontSize: 16,

    fontWeight: "700",
    color: "rgba(249,0,0,0.9)",
    textAlign: "center",
    justifyContent: "center",
    width: 248,
    height: 22,
  },
});

const profileStyles = StyleSheet.create({
  Profile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 64,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(229,245,223,1)",
    width: 428,
    height: 926,
  },
  Group904: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  Txt695: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Group511: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 64,
    paddingRight: 64,
    marginBottom: 11,
    backgroundColor: "rgba(29,129,20,1)",
    width: 428,
    height: 61,
  },
  Txt442: {
    fontSize: 25,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },

  Group3310: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 14,
  },
  Group452: {
    display: "flex",
    flexDirection: "row",
  },
  Ellipse1: {
    width: 150,
    height: 150,
    marginRight: 20,
  },
  Group547: {
    display: "flex",
    flexDirection: "column",
  },
  Txt895: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    marginBottom: 12,
  },
  Txt895: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    marginBottom: 12,
  },
  Txt712: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    marginBottom: 14,
  },
  Txt219: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
  },

  Txt162: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(0,0,0,0.6)",
  },

  Group743: {
    marginBottom: 24,
    borderRadius: 25,
    backgroundColor: "rgba(209,236,199,1)",
    shadowColor: "rgba(0,0,0,0.25)",
    elevation: 0,
    shadowOffset: { width: 0, height: 4 },
    width: 380,
    height: 236,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },
  Group547: {
    display: "flex",
    flexDirection: "column",
  },
  Group1058: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 1,
  },
  CheckCircle: {
    width: 24,
    height: 24,
    marginRight: 6,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group034: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 3,
  },
  CheckCircle: {
    width: 24,
    height: 24,
    marginRight: 6,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group034: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 3,
  },
  Vector3: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group452: {
    display: "flex",
    flexDirection: "row",
  },
  Vector3: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group309: {
    paddingTop: 13,
    paddingBottom: 12,
    paddingLeft: 119,
    paddingRight: 117,
    marginBottom: 23,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 380,
    height: 55,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group768: {
    paddingTop: 13,
    paddingBottom: 12,
    paddingLeft: 115,
    paddingRight: 114,
    marginBottom: 21,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 380,
    height: 55,
  },
  Txt869: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    width: 149,
    height: 28,
  },

  Group541: {
    paddingTop: 14,
    paddingBottom: 11,
    paddingLeft: 72,
    paddingRight: 70,
    marginBottom: 26,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 380,
    height: 55,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group699: {
    paddingTop: 14,
    paddingBottom: 11,
    paddingLeft: 84,
    paddingRight: 83,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 380,
    height: 55,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },
});

//EMPLOYERS STYLES
const ManageEmployeesStyle = StyleSheet.create({
  ManageEmployees: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 97,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(225,237,255,1)",
    width: 428,
    height: 926,
  },
  Group183: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component4: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  Txt667: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Group858: {
    marginBottom: 40,
    backgroundColor: "rgba(69,140,246,1)",
    width: 428,
    height: 61,
  },
  Txt814: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },
  Txt814: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },

  Group451: {
    paddingTop: 41,
    paddingBottom: 17,
    paddingLeft: 27,
    paddingRight: 27,
    marginBottom: 79,
    borderRadius: 169,
    backgroundColor: "rgba(255, 255, 255, 0.76)",
    width: 338,
    height: 254,
  },
  Undraw_fill_form_re_cwyf11: {
    width: 282,
    height: 194,
  },

  multiple1: {
    main: "Txt337",
    seg1: "[object Object]",
    seg2: "[object Object]",
    seg3: "[object Object]",
    seg4: "[object Object]",
  },
  Group57: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 51,
    paddingRight: 50,
    marginBottom: 32,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 340,
    height: 50,
  },
  Txt10102: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group56: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 61,
    paddingRight: 60,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt10102: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },
});

//Timesheet Style
const TimesheetStyles = StyleSheet.create({
  UploadTimesheet: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 45,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(225,237,255,1)",
    width: 428,
    height: 926,
  },
  Group7106: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  Txt4410: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Group765: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 14,
    paddingBottom: 13,
    paddingLeft: 22,
    paddingRight: 17,
    marginBottom: 1,
    backgroundColor: "rgba(69,140,246,1)",
  },
  Txt223: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    marginRight: 73,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector4: {
    width: 23,
    height: 23,
  },

  Group53: {
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    marginBottom: 39,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 39,
  },
  Txt296: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(249,0,0,0.9)",
    textAlign: "center",
    justifyContent: "center",
    width: 248,
    height: 22,
  },

  Txt1088: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 404,
    marginBottom: 27,
  },
  Group59: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 19,
    paddingRight: 0,
    marginBottom: 25,
    borderRadius: 50,
    backgroundColor: "rgba(213,217,212,1)",
  },
  Txt5910: {
    fontSize: 15,
    fontWeight: "400",
    color: "rgba(47,46,65,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  Group397: {
    paddingTop: 8,
    paddingBottom: 6,
    paddingLeft: 22,
    paddingRight: 25,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(213,217,212,1)",
    width: 106,
    height: 36,
  },
  Txt492: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Group60: {
    width: 373,
    height: 241,
    marginBottom: 201,
  },
  Group1023: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 68,
    paddingRight: 67,
    marginBottom: 16,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    width: 340,
    height: 50,
  },
  Txt1061: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group233: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 73,
    paddingRight: 72,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt1061: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },
});

//EmployersParticulars1 Style
const EmployersParticulars1 = StyleSheet.create({
  EmployeeSDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 37,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(225,237,255,1)",
    width: 428,
    height: 926,
  },
  Group352: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component4: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  Txt294: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Group524: {
    marginBottom: 1,
    backgroundColor: "rgba(69,140,246,1)",
    width: 428,
    height: 61,
  },
  Txt384: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },
  Group311: {
    display: "flex",
    flexDirection: "row",
  },
  Txt502: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    marginRight: 46,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector4: {
    width: 23,
    height: 23,
  },

  Group55: {
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    marginBottom: 25,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 39,
  },
  Txt209: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(249,0,0,0.9)",
    textAlign: "center",
    justifyContent: "center",
    width: 248,
    height: 22,
  },

  Txt729: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 404,
    marginBottom: 27,
  },
  Group62: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 32,
  },
  Txt394: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 4,
  },
  Rectangle145: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
    marginBottom: 30,
  },
  Txt466: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,0.8)",
    marginBottom: 7,
  },
  Txt894: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 4,
  },
  Rectangle134: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
    marginBottom: 17,
  },
  Txt894: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 4,
  },
  Rectangle135: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
    marginBottom: 18,
  },
  Txt396: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 1,
  },
  Rectangle132: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 159,
    height: 30,
    borderRadius: 10,
    marginBottom: 39,
  },
  Txt748: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,0.8)",
    marginBottom: 9,
  },
  Txt894: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 4,
  },
  Rectangle133: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
    marginBottom: 21,
  },
  Txt894: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 4,
  },
  Group323: {
    paddingTop: 5,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 41,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 159,
    height: 30,
  },
  Txt236: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group683: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 68,
    paddingRight: 67,
    marginBottom: 16,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    width: 340,
    height: 50,
  },
  Txt770: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group764: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 75,
    paddingRight: 70,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    width: 340,
    height: 50,
  },
  Txt770: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },
});

//EmployersParticulars2 Style
const EmployersParticulars2 = StyleSheet.create({
  CertifyingOfficerSDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    backgroundColor: "rgba(225,237,255,1)",
    width: 428,
    height: 926,
  },
  Group963: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: 14,
    none: "0px",
    width: 428,
    height: 874,
  },
  Component4: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  Txt1098: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Group7109: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 18,
    paddingBottom: 13,
    paddingLeft: 15,
    paddingRight: 18,
    marginBottom: 1,
    backgroundColor: "rgba(69,140,246,1)",
  },
  Txt374: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    marginRight: 54,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector4: {
    width: 23,
    height: 23,
  },

  Group55: {
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    marginBottom: 79,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 39,
  },
  Txt886: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(249,0,0,0.9)",
    textAlign: "center",
    justifyContent: "center",
    width: 248,
    height: 22,
  },

  Group61: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 144,
  },
  Txt536: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 4,
  },
  Rectangle134: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
    marginBottom: 33,
  },
  Txt178: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 5,
  },
  Rectangle133: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
    marginBottom: 32,
  },
  Txt178: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 5,
  },
  Rectangle135: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
    marginBottom: 32,
  },
  Txt536: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 4,
  },
  Rectangle132: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 159,
    height: 30,
    borderRadius: 10,
    marginBottom: 34,
  },
  Txt536: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 4,
  },
  Rectangle145: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
  },

  Group226: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 68,
    paddingRight: 67,
    marginBottom: 16,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    width: 340,
    height: 50,
  },
  Txt453: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group336: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 75,
    paddingRight: 70,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    width: 340,
    height: 50,
  },
  Txt453: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Txt635: {
    position: "absolute",
    top: 173,
    left: 46,
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 404,
    height: 24,
  },
});

//EmployersConfirmation Style
const EmployersConfirmationStyle = StyleSheet.create({
  ReviewSubmission: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 23,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(225,237,255,1)",
    width: 428,
    height: 926,
  },
  Group376: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component8: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  Txt201: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Group778: {
    backgroundColor: "rgba(69,140,246,1)",
    width: 428,
    height: 61,
  },
  Txt114: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },
  Group757: {
    display: "flex",
    flexDirection: "row",
  },
  Txt456: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    marginRight: 147,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector4: {
    width: 23,
    height: 23,
  },

  Group58: {
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    marginBottom: 14,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 39,
  },
  Txt017: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(249,0,0,0.9)",
    textAlign: "center",
    justifyContent: "center",
    width: 248,
    height: 22,
  },

  Group625: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 13,
    paddingBottom: 7,
    paddingLeft: 12,
    paddingRight: 3,
    marginBottom: 25,
    borderRadius: 10,
    backgroundColor: "rgba(241,247,255,1)",
    shadowColor: "rgba(0,0,0,0.25)",
    elevation: 0,
    shadowOffset: { width: 0, height: 4 },
  },
  Txt375: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 10,
  },
  Group554: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 12,
  },
  Txt548: {
    fontSize: 18,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 22,
  },
  Txt200: {
    fontSize: 15,
    fontWeight: "400",
    color: "rgba(47,46,65,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 40,
  },
  Vector5: {
    width: 21,
    height: 18.66,
  },

  Line3: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(181,181,181,1)",
    transform: "rotate(-0.02deg);",
    width: 379,
    height: 1,
    marginBottom: 8,
  },
  Group2105: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 6,
  },
  Txt719: {
    fontSize: 18,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 310,
  },
  Vector5: {
    width: 21,
    height: 18.66,
  },

  Txt4710: {
    fontSize: 18,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 7,
  },
  Group805: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
  },
  Txt21010: {
    fontSize: 15,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 83,
  },
  Txt1103: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group554: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 12,
  },
  Txt2101: {
    fontSize: 15,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 65,
  },
  Txt1103: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group807: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 16,
  },
  Txt3910: {
    fontSize: 15,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 80,
  },
  Txt1103: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Txt604: {
    fontSize: 18,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 11,
  },
  Group735: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 8,
  },
  Txt373: {
    fontSize: 15,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 36,
  },
  Txt1103: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group1092: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 7,
  },
  Txt439: {
    fontSize: 15,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },
  Line4: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(181,181,181,1)",
    transform: "rotate(-0.02deg);",
    width: 379,
    height: 1,
  },
  Txt1103: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group344: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 7,
  },
  Txt744: {
    fontSize: 18,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 171,
  },
  Vector5: {
    width: 21,
    height: 18.66,
  },

  Group805: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
  },
  Txt584: {
    fontSize: 15,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 84,
  },
  Txt1103: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group542: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 9,
  },
  Txt008: {
    fontSize: 15,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 33,
  },
  Txt1103: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group160: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  Txt1105: {
    fontSize: 15,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 29,
  },
  Txt1103: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group045: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 8,
  },
  Txt155: {
    fontSize: 15,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 77,
  },
  Txt1103: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group757: {
    display: "flex",
    flexDirection: "row",
  },
  Txt584: {
    fontSize: 15,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginRight: 84,
  },
  Txt1103: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group699: {
    marginBottom: 16,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    width: 340,
    height: 50,
  },
  Txt731: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },
  Txt731: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group545: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 75,
    paddingRight: 70,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    width: 340,
    height: 50,
  },
  Txt731: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },
});

//EmployersSubmission Style
const EmployersSubmissionStyle = StyleSheet.create({
  MeFinal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 105,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(225,237,255,1)",
    width: 428,
    height: 926,
  },
  Group778: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 11,
  },
  Txt523: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Group991: {
    paddingTop: 14,
    paddingBottom: 13,
    paddingLeft: 62,
    paddingRight: 61,
    marginBottom: 88,
    backgroundColor: "rgba(69,140,246,1)",
    width: 428,
    height: 61,
  },
  Txt748: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },

  Undraw_well_done_i2wr1: {
    width: 345,
    height: 311,
    marginBottom: 88,
  },
  Txt386: {
    fontSize: 20,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 372,
    height: 114,
    marginBottom: 62,
  },
  Group6910: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 90,
    paddingRight: 92,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    width: 340,
    height: 50,
  },
  Txt3107: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },
});

const styles = StyleSheet.create({
  LongTextInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },

  ShortTextInput: {
    height: 40,
    width: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
});
