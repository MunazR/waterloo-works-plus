import React from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, 
  Text, TouchableHighlight, View, WebView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { observable } from 'mobx';
import { inject, observer } from 'mobx-react/native'

import { Accordion } from '../shared/Accordion';

import Colors from '../style/Color';

@inject('AppStore')
@observer
export class JobScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.title : 'Job',
    };
  };

  formatHTML = (html) => {
    return '<body style="font-size: 16pt; font-family: Arial; background-color: ' + Colors.veryLightBlue + '">' +
      html + '</body>';
  }

  render() {
    const { AppStore, navigation } = this.props;
    const { params } = navigation.state;
    const { jobId, term } = params;

    const job = AppStore.jobs.get(jobId);
    const isLoadingJob = AppStore.isLoadingJob.get(jobId);

    if (!job) {
      if (isLoadingJob) {
        return (
          <SafeAreaView style={styles.root}>
            <ActivityIndicator style={styles.loadingIndicator} />
          </SafeAreaView>
        );
      } else {
        return (
          <SafeAreaView style={styles.root}>
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>Oops, something went wrong</Text>
              <TouchableHighlight
                underlayColor={'transparent'}
                onPress={() => AppStore.getJob(jobId, term)}
              >
                <Text style={styles.retryText}>Retry</Text>
              </TouchableHighlight>
            </View>
          </SafeAreaView>
        );
      }
    }

    return (
      <SafeAreaView style={styles.root}>
        <ScrollView style={styles.jobContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{job.title}</Text>
            <Text style={styles.subHeaderText}>{job.organization}</Text>
            <Text style={styles.subHeaderText}>{job.division}</Text>
          </View>
          <View style={styles.jobInfoContainer}>
            {
              job.postingStatus &&
              <View style={styles.group}>
                <View style={styles.keyContainer}>
                  <Text style={styles.keyText}>Posting Status:</Text>
                </View>
                <View style={styles.valueContainer}>
                  <Text style={styles.valueText}>{job.postingStatus}</Text>
                </View>
              </View>
            }
            {
              job.internalStatus &&
              <View style={styles.group}>
                <View style={styles.keyContainer}>
                  <Text style={styles.keyText}>Internal Status:</Text>
                </View>
                <View style={styles.valueContainer}>
                  <Text style={styles.valueText}>{job.internalStatus}</Text>
                </View>
              </View>
            }
            {
              job.workTerm &&
              <View style={styles.group}>
                <View style={styles.keyContainer}>
                  <Text style={styles.keyText}>Work Term:</Text>
                </View>
                <View style={styles.valueContainer}>
                  <Text style={styles.valueText}>{job.workTerm}</Text>
                </View>
              </View>
            }
            {
              job.openings &&
              <View style={styles.group}>
                <View style={styles.keyContainer}>
                  <Text style={styles.keyText}>Openings:</Text>
                </View>
                <View style={styles.valueContainer}>
                  <Text style={styles.valueText}>{job.openings}</Text>
                </View>
              </View>
            }
            {
              job.category &&
              <View style={styles.group}>
                <View style={styles.keyContainer}>
                  <Text style={styles.keyText}>Category:</Text>
                </View>
                <View style={styles.valueContainer}>
                  <Text style={styles.valueText}>{job.category}</Text>
                </View>
              </View>
            }
            {
              job.level && job.level.length &&
              <View style={styles.group}>
                <View style={styles.keyContainer}>
                  <Text style={styles.keyText}>Level:</Text>
                </View>
                <View style={styles.valueContainer}>
                  <Text style={styles.valueText}>{job.level.join(', ')}</Text>
                </View>
              </View>
            }
            {
              job.region &&
              <View style={styles.group}>
                <View style={styles.keyContainer}>
                  <Text style={styles.keyText}>Region:</Text>
                </View>
                <View style={styles.valueContainer}>
                  <Text style={styles.valueText}>{job.region}</Text>
                </View>
              </View>
            }
            {
              job.addressLineOne &&
              <View style={styles.group}>
                <View style={styles.keyContainer}>
                  <Text style={styles.keyText}>Address Line One:</Text>
                </View>
                <View style={styles.valueContainer}>
                  <Text style={styles.valueText}>{job.addressLineOne}</Text>
                </View>
              </View>
            }
            {
              job.addressLineTwo &&
              <View style={styles.group}>
                <View style={styles.keyContainer}>
                  <Text style={styles.keyText}>Address Line Two:</Text>
                </View>
                <View style={styles.valueContainer}>
                  <Text style={styles.valueText}>{job.addressLineTwo}</Text>
                </View>
              </View>
            }
            {
              job.city &&
              <View style={styles.group}>
                <View style={styles.keyContainer}>
                  <Text style={styles.keyText}>City:</Text>
                </View>
                <View style={styles.valueContainer}>
                  <Text style={styles.valueText}>{job.city}</Text>
                </View>
              </View>
            }
            {
              job.provinceOrState &&
              <View style={styles.group}>
                <View style={styles.keyContainer}>
                  <Text style={styles.keyText}>Province / State:</Text>
                </View>
                <View style={styles.valueContainer}>
                  <Text style={styles.valueText}>{job.provinceOrState}</Text>
                </View>
              </View>
            }
            {
              job.postalCodeOrZipCode &&
              <View style={styles.group}>
                <View style={styles.keyContainer}>
                  <Text style={styles.keyText}>Postal Code / Zip Code:</Text>
                </View>
                <View style={styles.valueContainer}>
                  <Text style={styles.valueText}>{job.postalCodeOrZipCode}</Text>
                </View>
              </View>
            }
            {
              job.country &&
              <View style={styles.group}>
                <View style={styles.keyContainer}>
                  <Text style={styles.keyText}>Country:</Text>
                </View>
                <View style={styles.valueContainer}>
                  <Text style={styles.valueText}>{job.country}</Text>
                </View>
              </View>
            }
            {
              job.workTermDuration &&
              <View style={styles.group}>
                <View style={styles.keyContainer}>
                  <Text style={styles.keyText}>Work Term Duration:</Text>
                </View>
                <View style={styles.valueContainer}>
                  <Text style={styles.valueText}>{job.workTermDuration}</Text>
                </View>
              </View>
            }
            {
              job.applicationDeadline &&
              <View style={styles.group}>
                <View style={styles.keyContainer}>
                  <Text style={styles.keyText}>Application Deadline:</Text>
                </View>
                <View style={styles.valueContainer}>
                  <Text style={styles.valueText}>{new Date(job.applicationDeadline).toLocaleString()}</Text>
                </View>
              </View>
            }
          </View>
          {
            job.specialJobRequirements &&
            <Accordion
              header={'Special Job Requirements'}
            >
              <Text style={styles.bodyText}>{job.specialJobRequirements}</Text>
            </Accordion>
          }
          {
            job.summary &&
            <Accordion
              header={'Job Summary'}
            >
              <Text style={styles.bodyText} selectable>{job.summary}</Text>
            </Accordion>
          }
          {
            job.responsibilities &&
            <Accordion
              header={'Job Responsibilities'}
            >
              <Text style={styles.bodyText}>{job.responsibilities}</Text>
            </Accordion>
          }
          {
            job.requiredSkills &&
            <Accordion
              header={'Required Skills'}
            >
              <Text style={styles.bodyText}>{job.requiredSkills}</Text>
            </Accordion>
          }
          {
            job.compensationAndBenefitsInformation &&
            <Accordion
              header={'Compensation & Benefits Information'}
            >
              <Text style={styles.bodyText}>{job.compensationAndBenefitsInformation}</Text>
            </Accordion>
          }
          {
            job.targetedDegreesAndDisciplines &&
            <Accordion
              header={'Targeted Degrees & Disciplines'}
            >
              <Text style={styles.bodyText}>{job.targetedDegreesAndDisciplines}</Text>
            </Accordion>
          }
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  loadingIndicator: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  errorText: {
    color: Colors.veryDarkBlue,
    fontSize: 22,
    fontWeight: 'bold',
  },
  retryText: {
    fontSize: 28,
    padding: 10,
    color: Colors.lightBlue,
    fontWeight: 'bold',
  },
  jobContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerText: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeaderText: {
    color: Colors.white,
    fontSize: 20,
  },
  bodyText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  keyText: {
    color: Colors.veryDarkBlue,
    fontWeight: 'bold',
  },
  headerContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: Colors.blue,
  },
  group: {
    marginHorizontal: 10,
    marginBottom: 5,
    flexDirection: 'row',
  },
  keyContainer: {
    width: 100,
    marginRight: 5,
  },
  keyText: {
    fontWeight: 'bold',
    color: Colors.darkGrey,
  },
  valueContainer: {
    flex: 1,
  },
  valueText: {
    color: Colors.veryDarkGrey,
  },
  webView: {
    paddingHorizontal: 10
  },
  jobInfoContainer: {
    paddingVertical: 15,
  },
  bodyText: {
    padding: 10,
    fontSize: 14,
  }
});